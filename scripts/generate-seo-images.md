# SEO Images Generation Guide

## Required Images for SEO Optimization

To complete the SEO setup, you need to create the following images and place them in the `/public/images/` directory:

### 1. Open Graph Images

- **og-image.jpg** (1200x630px)

  - Main social sharing image
  - Should include: Your name, title "Software Developer", key technologies (React, Node.js)
  - Use your brand colors (purple/teal gradient)
  - High contrast, readable text

- **og-image-square.jpg** (1200x1200px)
  - Square format for some social platforms
  - Same content as og-image.jpg but in square format

### 2. Profile Image

- **profile.jpg** (400x400px)
  - Professional headshot
  - High quality, well-lit
  - Should look professional for LinkedIn, GitHub, etc.

### 3. Favicon Files

Place these in the `/public/` directory:

- **favicon.ico** (16x16, 32x32, 48x48px)
- **favicon-16x16.png** (16x16px)
- **favicon-32x32.png** (32x32px)
- **apple-touch-icon.png** (180x180px)
- **android-chrome-192x192.png** (192x192px)
- **android-chrome-512x512.png** (512x512px)

## Design Guidelines

### Open Graph Image Design

1. **Background**: Use your gradient (purple to teal) or dark theme
2. **Text**:
   - Main title: "Aleksandar Lazić"
   - Subtitle: "Software Developer"
   - Technologies: "React • Node.js • TypeScript • Full Stack"
3. **Layout**: Clean, modern, professional
4. **Fonts**: Use bold, readable fonts
5. **Colors**: Match your site's color scheme

### Profile Image Guidelines

1. **Professional attire**
2. **Good lighting**
3. **Clean background**
4. **Friendly but professional expression**
5. **High resolution**

## Tools for Creating Images

### Free Tools

- **Canva** - Easy drag-and-drop design
- **GIMP** - Free Photoshop alternative
- **Figma** - Professional design tool (free tier)
- **Paint.NET** - Simple image editor

### Online Favicon Generators

- **Favicon.io** - Generate all favicon sizes
- **RealFaviconGenerator** - Comprehensive favicon generator
- **Favicon Generator** - Simple favicon creator

## Quick Canva Template

If using Canva:

1. Create custom size: 1200x630px
2. Use gradient background: Purple (#8B5CF6) to Teal (#2DD4BF)
3. Add text:
   - "Aleksandar Lazić" (large, bold, white)
   - "Software Developer" (medium, white)
   - "React • Node.js • TypeScript • Full Stack" (small, light gray)
4. Add subtle tech icons or patterns
5. Export as JPG

## Testing Your Images

After creating the images:

1. Test Open Graph images with:
   - Facebook Sharing Debugger
   - LinkedIn Post Inspector
   - Twitter Card Validator
2. Test favicons in different browsers
3. Ensure images load quickly (compress if needed)

## File Structure After Completion

```
public/
├── images/
│   ├── og-image.jpg
│   ├── og-image-square.jpg
│   └── profile.jpg
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── robots.txt
```

Once you have all these images in place, your SEO implementation will be complete and ready to drive traffic to your portfolio!
