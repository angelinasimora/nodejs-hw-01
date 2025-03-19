import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
    const emptyContacts = [];
    await writeContacts(emptyContacts);
    console.log('✅ Усі контакти успішно видалені.');

};

removeAllContacts();
