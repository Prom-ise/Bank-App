const userMode = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let secretKey = process.env.SECRET_KEY;
const cloudinary = require("cloudinary");

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

const register = async (req, res) => {
    // res.send("register");
    const { firstName, lastName, email, password } = req.body;
    let saltRound = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRound);
    console.log(req.body);
    const user = new userMode({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
    });
    user.save()
        .then((response) => {
            console.log("User saved successfully", response);
            res.status(201).json("User registered successfully")
        })
        .catch((error) => {
            console.error(error);
        })
}
const login = async (req, res) => {
    const { email, password } = req.body;

    userMode.
        findOne({ email: email })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: "User not found, check email or password and try again" });
            }
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    console.error("Error comparing passwords:", err);
                    return res.status(500).json({ message: "Internal server error" });
                }
                if (result) {
                    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "10m" });
                    return res.status(200).json({ message: "Login successful", token: token, user: user });
                } else {
                    return res.status(401).json({ message: "Invalid email or password" });
                }
            });
        })
}
const dashboard = async (req, res) => {
    try {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, secretKey, async (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(401).json({ status: false, message: "You are not Authorized" });
            } else {
                console.log(decoded);
                const user = await userMode.findById(decoded.userId);
                if (!user) {
                    return res.status(404).json({ status: false, message: "User not found" });
                }
                res.status(200).json({ status: true, message: "Welcome to Dashboard", user });
            }
        });
    } catch (error) {
        console.error("Error accessing dashboard:", error);
        res.status(500).json({ status: false, message: "Internal server error" });
    }
};

const profile = async (req, res) => {
    try {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, secretKey, async (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(401).json({ status: false, message: "You are not Authorized" });
            } else {
                console.log(decoded);
                const user = await userMode.findById(decoded.userId);
                if (!user) {
                    return res.status(404).json({ status: false, message: "User not found" });
                }
                res.status(200).json({ status: true, message: "Welcome to profile", user });
            }
        });
    } catch (error) {
        console.error("Error accessing profile:", error);
        res.status(500).json({ status: false, message: "Internal server error" });
    }
};

const uploadPic = async (req, res) => {
    
        const file = req.body.myFile; // Assuming the image file is sent with the key 'myFile'
        console.log(file);
    //     const result = await  cloudinary.uploader.upload(file);
    
    //     if (result.ok) { // Check for successful upload to Cloudinary
    //       res.json({ status: true, message: 'Uploaded file successfully', result });
    //     } else {
    //       res.status(500).json({ message: 'Error uploading file' });
    //     }
    //   } catch (error) {
    //     console.error('Error uploading image:', error);
    //     res.status(500).json({ message: 'Error uploading file' });
    //   }

    cloudinary.uploader.upload(file,  (result, err) => {
        if (result) {
          console.log(result);
          res.send({ status: true, message: "Uploaded file sucessfully", result });
        } else {
          console.log(err);
          res.send({ message: "Error in uploading file", err });
        }
      })
    };
  
module.exports = {
    register,
    login,
    dashboard,
    profile, 
    uploadPic
}
