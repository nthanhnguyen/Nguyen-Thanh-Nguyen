import { Request, Response } from 'express';
import {
    getAllUsers, createUser, getUserByEmail,
    updateUser, deleteUserByEmail
} from '../services/userService';

// Handler to render the homepage with a list of users
export const getHomepage = async (req: Request, res: Response) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });
};

// Handler to render the create user page
export const getCreatePage = (req: Request, res: Response) => {
    res.render('create.ejs', { message: null, error: null });
};

// Handler to render the update user page with the user's details
export const getUpdatePage = async (req: Request, res: Response) => {
    let user = await getUserByEmail(req.params.email);
    res.render('update.ejs', { userEdit: user, message: null, error: null });
};

// Handler to render the delete user page with the user's details
export const getDeletePage = async (req: Request, res: Response) => {
    let user = await getUserByEmail(req.params.email);
    res.render('delete.ejs', { userEdit: user });
};

// Handler to create a new user and render the create page with a success or error message
export const handleCreateUser = async (req: Request, res: Response) => {
    try {
        await createUser(req, res);
        return res.render('create.ejs', { message: 'Create user succeed!', error: null });
    } catch (error) {
        return res.render('create.ejs', { message: null, error: error.message });
    }
};

// Handler to update a user and render the update page with the updated user details and a success or error message
export const handleUpdateUser = async (req: Request, res: Response) => {
    try {
        await updateUser(req, res);
        let user = await getUserByEmail(req.body.email);
        return await res.render('update.ejs', { userEdit: user, message: 'Update user succeed!', error: null });
    } catch (error) {
        let user = await getUserByEmail(req.body.email);
        return await res.render('update.ejs', { userEdit: user, message: null, error: error.message });
    }
};

// Handler to delete a user and redirect to the homepage
export const handleDeleteUser = async (req: Request, res: Response) => {
    await deleteUserByEmail(req.body.email);
    return res.redirect('/');
};
