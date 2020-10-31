import {CREATE_CONTACT, DELETE_SELECTED_CONTACT} from '../constant/type'
import {EDIT_CONTACT} from '../constant/type'
import {UPDATE_CONTACT} from '../constant/type'
import {DELETE_CONTACT} from '../constant/type'
import {SELECT_CONTACT} from '../constant/type'
import {CLEAR_CONTACT} from '../constant/type'





export const addContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact
})



export const editContact = (id) => ({
    type: EDIT_CONTACT,
    payload:id
})


export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload:contact
})


export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload:id
})

export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload:id
})  


export const clearContact = () => ({
    type: CLEAR_CONTACT,
})


export const deleteSelectedContact = () => ({
    type: DELETE_SELECTED_CONTACT,
})






