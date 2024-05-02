
const teachersData = [
            {
                name: "John Doe",
                photo: "time1.jpg",
                qualification: "Ph.D. in Education",
                bio: "John Doe is a passionate educator with over 10 years of experience...",
                courses: ["Html Language", "CSS Language", "Javascript Language"]
            },

            {
                name: "Jane Smith",
                photo: "time2.jpg",
                qualification: "M.Sc. in Physics",
                bio: "Jane Smith is an enthusiastic physics teacher with a focus on...",
                courses: ["Physics Fundamentals", "Quantum Mechanics", "Astrophysics"]
            },
            {
                name: "Emily Brown",
                photo: "time10.jpg",
                qualification: "B.A. in Literature",
                bio: "Emily Brown is an experienced literature teacher.....",
                courses: ["English Literature", "Creative Writing", "Shakespearean Studies"]
            },
            {
                name: "Michael Johnson",
                photo: "time4.jpg",
                qualification: "M.S. in Computer Science",
                bio: "Michael Johnson is a software engineer turned CSE educator...",
                courses: ["C++ Programing", "Data Structures", "Web Development"]
            },
            {
                name: "Sarah Lee",
                photo: "time7.jpg",
                qualification: "Ph.D. in Chemistry",
                bio: "Sarah Lee is a dedicated chemist with expertise in organic chemistry...",
                courses: ["Organic Chemistry", "Biochemistry", "Chemical Kinetics"]
            },

            {
                name: "Tim David",
                photo: "time9.jpg",
                qualification: "Ph.D. in Computer Science",
                bio: "Sarah Lee is a dedicated chemist with expertise in organic chemistry...",
                courses: ["Web Development", "Reactnode", "Mern stack"]
            }
            // Other teacher objects...
        ];

        document.addEventListener('DOMContentLoaded', function() {
            const teacherList = document.getElementById("teacherList");
        
            teachersData.forEach(teacher => {
                // Create teacher card container
                const teacherCard = document.createElement("div");
                teacherCard.classList.add("teacher-card");
        
                // Create image element for teacher photo
                const teacherPhoto = document.createElement("img");
                teacherPhoto.src = teacher.photo;
                teacherPhoto.alt = teacher.name;
        
                // Populate teacher information
                const teacherName = document.createElement("h3");
                teacherName.textContent = teacher.name;
                teacherName.classList.add("teacher-name"); // Add class to the name element
        
                const teacherQualification = document.createElement("p");
                teacherQualification.textContent = "Qualifications: " + teacher.qualification;
        
                const teacherBio = document.createElement("p");
                teacherBio.textContent = teacher.bio;
        
                // Populate courses offered
                const coursesHeading = document.createElement("h3");
                coursesHeading.textContent = "Courses Offered";
        
                const coursesContainer = document.createElement("div");
                coursesContainer.classList.add("courses-container");
        
                teacher.courses.forEach(course => {
                    const courseBox = document.createElement("div");
                    courseBox.classList.add("course-box");
                    courseBox.textContent = course;
                    coursesContainer.appendChild(courseBox);
                });
        
                // Append elements to teacher card
                teacherCard.appendChild(teacherPhoto);
                teacherCard.appendChild(teacherName);
                teacherCard.appendChild(teacherQualification);
                teacherCard.appendChild(teacherBio);
                teacherCard.appendChild(coursesHeading);
                teacherCard.appendChild(coursesContainer);
        
                // Append teacher card to the list
                teacherList.appendChild(teacherCard);
            });
        });