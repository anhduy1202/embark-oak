1. Install Next.js:
``` npx create-next-app@latest ```

2. Install Shadcnui cli:
```npx shadcn-ui@latest init```

3. Add Google Fonts
```@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');```
```@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');```

4. Install React Icons
```npm install react-icons --save```

I. Landing Page:
    5. Landing Page, Menu (desktop + mobile)
    5.1 Mobile Menu (npx shadcn-ui@latest add separator)
    6. Shopping Cart component
    7. Hero Component, add button (npx shadcn-ui@latest add button)
    10. Featured Component, AddToCartBtn, carousel for mobile responsive (.product-carousel in global.css, npx shadcn-ui@latest add carousel card)
    11. Modify carousel.tsx to reduce previous, CarouselNext, Prev left/right
    12. Categories.tsx
    13. Refactor to CustomCard
    14. Blogs.tsx, add custom to LabelCard like customImage, customText,...