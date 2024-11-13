import { openDb } from '../config/Database.js';

export async function createTable() {
	openDb().then(db => {
		db.exec('');
	});
}

export async function createUser(user) {
	openDb().then(db => {
		db.exec('');
	});
}

export async function getUsers() {
	return openDb.then(db => {
		db.exec('');
	})
}

export async function getUserById(id) {
	return openDb().then(db => {
		db.exec('');
	})
}

export async function updateUser(user) {
	return openDb().then(db => {
		db.exec('');
	})
}

export async function deleteUser(id) {
	return openDb().then(db => {
		db.exec('');
	})
}