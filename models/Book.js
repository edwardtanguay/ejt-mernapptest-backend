import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
	buyurl: String,
	currentPage: String,
	description: String,
	id: Number,
	idcode: String,
	language: String,
	rank: String,
	title: String,
	totalpages: String,
	whenrecordcreated: String
});

export const Book = mongoose.model('book', bookSchema);