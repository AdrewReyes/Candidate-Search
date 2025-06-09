# Candidate Search Application

## Overview

This is a React + TypeScript application that allows users to browse and save potential candidates from GitHub. Users can view candidate details, accept or reject candidates, and see a list of saved potential candidates. The application uses the GitHub API and requires a personal access token for authentication.

---

## Features

- **Candidate Search:** View one candidate at a time with details including name, username, location, avatar, email, GitHub profile URL, and company.
- **Accept/Reject Candidates:** Use "+" to save a candidate or "-" to skip.
- **Saved Candidates:** View a list of all accepted candidates.
- **Persistence:** Saved candidates persist across page reloads using localStorage.
- **No Candidates Handling:** Displays appropriate messages when there are no more candidates to review or no saved candidates.

---

## Screenshots

![Candidate Search Homepage]
![Potential Candidates Page]

## Getting Started

### Prerequisites

- Node.js and npm installed
- A GitHub Personal Access Token (fine-grained, default permissions)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name/Develop
