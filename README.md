# Messagram Landing Page

A modern Jekyll-based landing page for the Messagram mobile application. This landing page allows users to download the app from various platforms and sign up for updates.

## Features

- App download links for:
  - Google Play Store
  - Apple App Store
  - Direct APK download
- Newsletter subscription
- Waiting list signup for product launch notifications

## Project Structure

```
windsurf-project/
├── _layouts/           # Jekyll layouts
│   └── default.html    # Default layout template
├── _includes/          # Reusable components
├── _config.yml         # Jekyll configuration
├── assets/            
│   ├── css/           # Stylesheet directory
│   │   └── styles.css
│   └── js/            # JavaScript directory
│       └── script.js
├── index.html          # Main landing page
└── README.md          # Project documentation
```

## Setup

### Prerequisites
- Ruby (version 2.5.0 or higher)
- RubyGems
- GCC and Make
- Jekyll and Bundler gems

### Installation
1. Install Jekyll and Bundler:
```bash
gem install jekyll bundler
```

2. Clone the repository
3. Navigate to the project directory
4. Install dependencies:
```bash
bundle install
```

5. Update the app store links in `index.html` with your actual app store URLs
6. Update the APK download link with your actual APK file location

## Development

### Local Development
1. Start the Jekyll development server:
```bash
bundle exec jekyll serve
```
2. Visit `http://localhost:4000` in your browser
3. Make changes to the files as needed
4. Jekyll will automatically rebuild the site when changes are detected

### Jekyll Configuration
The `_config.yml` file contains important site configurations:
- Site title and description
- Base URL configuration
- Build settings
- Plugin configurations

## Customization

### Modifying Styles
Edit the `assets/css/styles.css` file to customize the appearance of the landing page. The stylesheet is organized by components:
- Header styles
- Button styles
- Form styles

### Form Handling
The `assets/js/script.js` file contains the logic for handling form submissions. Modify this file to:
- Add form validation
- Connect to your backend API
- Implement custom success/error messages

### Layouts and Includes
- Modify `_layouts/default.html` to change the basic HTML structure
- Create new layouts in the `_layouts` directory for different page types
- Add reusable components to the `_includes` directory

## Deployment

### GitHub Pages
1. Update the `baseurl` in `_config.yml`
2. Push to your GitHub repository
3. Enable GitHub Pages in your repository settings

### Alternative Deployment
1. Build the site:
```bash
bundle exec jekyll build
```
2. Upload the contents of the `_site` directory to your web hosting service

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Contact

For any queries regarding the Messagram app or this landing page, please reach out to:
[Your Contact Information]
