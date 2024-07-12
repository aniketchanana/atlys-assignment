# Documentation & Notes

### Note for evaluator

- All the code is custom have used minimum external library
- Focused on writing Re-Usable components more than CSS
- I was having some questions for which i emailed but didn't got reply back 😅
- I was not able to inspect the exact colors from the figma to put up color as i liked

### figma

https://www.figma.com/design/S4bZXDniOieMhyGIpTnVu5/Frontend-Developer%3A-Atlys?node-id=1-2

### Live demo

https://atlys-assignment-five.vercel.app

### Loom demo

https://www.loom.com/share/20e8cddc8c8e43cba106667be08465fa?sid=e2b38364-e43f-477d-a5ba-497ff0f6ad20

## Tech Stack

- Next.js
- TypeScript

## Local setup

- git clone repo
- npm install
- npm run dev (to start development server)

## UI Components

### Button

- Props:
  - `children`: React.ReactNode
  - `onClick`: () => void
  - `className`: string

### Anchor

- Props:
  - `href`: string
  - `children`: React.ReactNode
  - `rightContent`: React.ReactNode
  - `leftContent`: React.ReactNode
  - `className`: string
  - `onClick`: () => void

### Dialog

- Props:
  - `open`: boolean
  - `onClose`: () => void
  - `title`: string
  - `subTitle`: string
  - `children`: React.ReactNode
  - `fullWidth`: boolean
  - `maxWidth`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

### Input

- Props:
  - `label`: string
  - `rightTop`: React.ReactNode
  - `type`: 'text' | 'password'
  - `placeholder`: string
  - `value`: string
  - `onChange`: (e: React.ChangeEvent<HTMLInputElement>) => void
  - `className`: string
  - `leftIcon`: React.ReactNode

### TextArea

- Props:
  - `label`: string
  - `rightTop`: React.ReactNode
  - `placeholder`: string
  - `value`: string
  - `onChange`: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  - `className`: string
  - `leftIcon`: React.ReactNode
  - `editable`: boolean

### Typography

- Props:
  - `variant`: 'heading' | 'subheading' | 'body' | 'caption'
  - `children`: React.ReactNode
  - `className`: string

### BaseWrapper

- Props:
  - `children`: React.ReactNode
  - `className`: string

## Module Components

### Auth

#### LoginForm

- Props:
  - `className`: string
  - `onRegisterClick`: () => void

#### RegisterForm

- Props:
  - `onLoginClick`: () => void

### Home

#### UserPost

- Props:
  - `userName`: string
  - `timeStamp`: string
  - `isEdited`: boolean (optional)
