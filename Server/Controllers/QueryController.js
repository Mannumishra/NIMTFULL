const contact = require("../Model/QueryModel")

// Create a new contact
const createContact = async (req, res) => {
    console.log(req.body)
    try {
        const { name, email, phone, branch, course ,message } = req.body;
        const errorMessage = [];

        if (!name) errorMessage.push("Name is required");
        if (!email) errorMessage.push("Email is required");
        if (!phone) errorMessage.push("Phone is required");
        if (!branch) errorMessage.push("Branch is required");
        if (!course) errorMessage.push("Course is required");
        if (!message) errorMessage.push("Message is required");

        if (errorMessage.length > 0) {
            return res.status(400).json({
                success: false,
                message: errorMessage.join(", ")
            });
        }

        const newContact = new contact({
            name,
            email,
            phone,
            branch,
            course,
            message
        });

        await newContact.save();

        res.status(200).json({
            success: true,
            message: "Contact created successfully",
            data: newContact
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Get all contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await contact.find(); // You can add filters if needed
        res.status(200).json({
            success: true,
            data: contacts
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// Update query status
const updateContactStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const updatedContact = await contact.findByIdAndUpdate(
            id,
            { status },
            { new: true } // Return the updated document
        );

        if (!updatedContact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Status updated successfully",
            data: updatedContact,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = {
    createContact,
    getContacts,
    updateContactStatus, // Export the new function
};
