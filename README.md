Rizvi Book Bank

Rizvi Book Bank is a collaborative web platform designed exclusively for the students of Rizvi College of Engineering. It serves as a centralized digital repository where students can share textbooks, access faculty recommendations, and download previous years' question papers.

The goal of this initiative is to SAVE MONEY on expensive textbooks, and foster a helping culture between seniors and juniors.

Key Features
Curated Book Listings: Organized browsing of textbooks by Branch (ECS, CS, Mech, Civil) and Semester.
Teacher's Corner: A unique section featuring book recommendations directly from faculty members (e.g., Prof. Ahmed, Dr. Khan) along with their personal notes on how to study specific subjects.
PYQ Archive: A dedicated section for viewing and downloading Previous Years' Question Papers to assist with exam preparation.
Contribution System: Interface for students to donate physical books or upload digital notes/solutions (Frontend implementation).
Responsive Design: Fully optimized for mobile and desktop devices, allowing students to access resources on the go.
Modern UI: Features a "Modern Library" aesthetic using a Deep Teal and Golden Amber color palette with smooth animations.

Tech Stack
HTML : Semantic structure for accessible web content.
CSS : Custom styling with CSS Variables, Flexbox, and CSS Grid.
     *Theme:* Deep Teal (`#00695c`) & Amber (`#ffca28`).
     *Animations:* Keyframe animations and transitions.
JavaScript (ES6+)
    * DOM Manipulation for active navigation states.
    * `IntersectionObserver` API for scroll-triggered fade-in animations.
    * Form handling simulations.

📂 Project Structure

```bash
rizvi-bookbank/
├── index.html          # Landing page 
├── books.html          # Book listings by branch
├── teacher-books.html  # Faculty recommendations
├── question-papers.html # PYQs and Upload form
├── signup.html         # User registration form
├── contact.html        # Contact/Support form
├── styles.css          # Unified stylesheet
├── script.js           # Logic for animations and nav highlighting
└── README.md           # Project documentation

Future Improvements
Backend Integration: implementing a Node.js/Express backend to handle real user authentication and database storage.
Search Functionality: Real-time filtering of books by author or subject.

Contributors
Built with love by the Final Year ECS Team:
Fauzaan
Hasan
Rehan
Saad
