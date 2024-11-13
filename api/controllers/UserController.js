import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../repositories/UserRepository.js';
import express from 'express';


export async function getAllUsers(req, res) {
	try {
		// ...
	}
	catch(error) {
		res.send({message: '', statusCode: 404});
	}
}

export async function getUserLogged(req, res) {
	try {
		// ...
	}
	catch(error) {
		res.send({message: '', statusCode: 404});
	}
}

export async function registerNewAccount(req, res) {
	try {
		// ...
	}
	catch(error) {
		res.send({message: '', statusCode: 400});
	}
}

export async function updateUserAccount(req, res) {
	try {
		// ...
	}
	catch(error) {
		res.send({message: '', statusCode: 204});
	}
}

export async function deleteUserAccount(req, res) {	
	try {
		// ...
	}
	catch(error) {
		res.send(error);
	}
}