/* eslint-disable no-plusplus */

// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)


export function seedDatabase(firebase) {
    const users = [
        {
            uid: 'YWfBqWmXirVpCqsV1lOIlobzOFu1',
            username: 'karl',
            fullName: 'Karl Hadwen',
            emailAddress: 'karlhadwen@gmail.com',
            following: ['2'],
            followers: ['2', '3', '4'],
            dateCreated: Date.now()
        },
        {
            uid: '2',
            username: 'raphael',
            fullName: 'Raffaello Sanzio da Urbino',
            emailAddress: 'raphael@sanzio.com',
            following: [],
            followers: ['YWfBqWmXirVpCqsV1lOIlobzOFu1'],
            dateCreated: Date.now()
        },
        {
            uid: '3',
            username: 'dali',
            fullName: 'Salvador Dalí',
            emailAddress: 'salvador@dali.com',
            following: [],
            followers: ['YWfBqWmXirVpCqsV1lOIlobzOFu1'],
            dateCreated: Date.now()
        },
        {
            uid: '4',
            username: 'orwell',
            fullName: 'George Orwell',
            emailAddress: 'george@orwell.com',
            following: [],
            followers: ['YWfBqWmXirVpCqsV1lOIlobzOFu1'],
            dateCreated: Date.now()
        }
    ];

    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
        firebase.firestore().collection('users').add(users[k]);
    }
}