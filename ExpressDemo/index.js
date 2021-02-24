
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json()); 

const courses = [
    {id: 1, name: 'Course 1'},
    {id: 2, name: 'Course 2'},
    {id: 3, name: 'Course 3'},
];


app.get('/', (req, res) => {
    res.send('Hello World!!!')
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body); 
    
     if (error) {
    res.status(400).send(error.details[0].message);
    return;
    };

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)  res.status(404).send('the course with the give ID was not found...'); //404
    res.send(course)
}); 


app.put('/api/courses/:id', (req, res) => {
    //Look up the course
    // if not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)  res.status(404).send('the course with the give ID was not found...'); //404

    // validate
    // If invalid, return 400 – Bad request
    const { error } = validateCourse(req.body); 
    
   if (error) {
    res.status(400).send(error.details[0].message);
    return;
    }

    // Update Course
    course.name = req.body.name;
    // Return the updated course
    res.send(course); 
});

function validateCourse(course) {
   
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

   return schema.validate(course); 
}



//PORT 
const port = process.env.PORT || 3000; 

app.listen(port, () => console.log(`Listeting on port ${port}`));

