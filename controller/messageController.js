
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/errorMiddlewares.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  await Message.create({ firstName, lastName, email, phone, message });
  res.status(200).json({
    success: true,
    message: "Message Sent!",
  });
});

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});


// // Update (PUT)
// export const updateMessage = catchAsyncErrors(async (req, res, next) => {
//   const { id } = req.params;
//   const { firstName, lastName, email, phone, message } = req.body;

//   if (!firstName || !lastName || !email || !phone || !message) {
//     return next(new ErrorHandler("Please provide all fields to update!", 400));
//   }

//   const updatedMessage = await Message.findByIdAndUpdate(
//     id,
//     { firstName, lastName, email, phone, message },
//     { new: true, runValidators: true } // Return the updated document
//   );

//   if (!updatedMessage) {
//     return next(new ErrorHandler("Message not found!", 404));
//   }

//   res.status(200).json({
//     success: true,
//     message: "Message updated successfully!",
//     updatedMessage,
//   });
// });


// // Delete (DELETE)
// export const deleteMessage = catchAsyncErrors(async (req, res, next) => {
//   const { id } = req.params;

//   const message = await Message.findByIdAndDelete(id);

//   if (!message) {
//     return next(new ErrorHandler("Message not found!", 404));
//   }

//   res.status(200).json({
//     success: true,
//     message: "Message deleted successfully!",
//   });
// });
