import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('employees').del();

    // Inserts seed entries
    await knex('employees').insert([
        {
            employeeId: 1,
            firstName: 'Nancy',
            lastName: 'Davolio',
            birthDate: '1968-12-07',
            photo: 'EmpID1.pic',
            notes: "Education includes a BA in psychology from Colorado State University. She also completed (The Art of the Cold Call). Nancy is a member of 'Toastmasters International'.",
        },
        {
            employeeId: 2,
            firstName: 'Andrew',
            lastName: 'Fuller',
            birthDate: '1952-02-18',
            photo: 'EmpID2.pic',
            notes: 'Andrew received his BTS commercial and a Ph.D. in international marketing from the University of Dallas. He is fluent in French and Italian and reads German. He joined the company as a sales representative',
        },
        {
            employeeId: 3,
            firstName: 'Janet',
            lastName: 'Leverling',
            birthDate: '1963-08-29',
            photo: 'EmpID3.pic',
            notes: 'Janet has a BS degree in chemistry from Boston College). She has also completed a certificate program in food retailing management. Janet was hired as a sales associate and was promoted to sales representative.',
        },
        {
            employeeId: 4,
            firstName: 'Margaret',
            lastName: 'Peacock',
            birthDate: '1958-09-18',
            photo: 'EmpID4.pic',
            notes: 'Margaret holds a BA in English literature from Concordia College and an MA from the American Institute of Culinary Arts. She was temporarily assigned to the London office before returning to her permanent post in Seattle.',
        },
        {
            employeeId: 5,
            firstName: 'Steven',
            lastName: 'Buchanan',
            birthDate: '1955-03-03',
            photo: 'EmpID5.pic',
            notes: 'Steven Buchanan graduated from St. Andrews University',
        },
        {
            employeeId: 6,
            firstName: 'Michael',
            lastName: 'Suyama',
            birthDate: '1963-07-01',
            photo: 'EmpID6.pic',
            notes: 'Michael is a graduate of Sussex University (MA',
        },
        {
            employeeId: 7,
            firstName: 'Robert',
            lastName: 'King',
            birthDate: '1960-05-28',
            photo: 'EmpID7.pic',
            notes: "Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan and then joining the company. After completing a course entitled 'Selling in Europe'",
        },
        {
            employeeId: 8,
            firstName: 'Laura',
            lastName: 'Callahan',
            birthDate: '1958-01-08',
            photo: 'EmpID8.pic',
            notes: 'Laura received a BA in psychology from the University of Washington. She has also completed a course in business French. She reads and writes French.',
        },
        {
            employeeId: 9,
            firstName: 'Anne',
            lastName: 'Dodsworth',
            birthDate: '1969-07-01',
            photo: 'EmpID9.pic',
            notes: 'Anne has a BA degree in English from St. Lawrence College. She is fluent in French and German.',
        },
    ]);
}
