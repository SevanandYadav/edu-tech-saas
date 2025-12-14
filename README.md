# EduTech Portal - Multi-Tenant School Management SaaS

## Getting Started

First, run the development server:

```bash
npm run dev
```

Deployed app url: https://seekodigital.netlify.app

## User Flow

### 🏠 **Public Access (Before Login)**
1. **School Selection** - Choose from available schools (JJ, Demo)
2. **Public Dashboard** - View general school information:
   - Welcome banner with school branding
   - Latest news (dynamic slideshow)
   - Upcoming events
   - Community testimonials
   - Notifications (scrolling)
   - Principal's message

### 🔐 **Authentication Flow**
1. **Login Modal** - Role-based authentication
2. **User Roles**: STUDENT | TEACHER | PARENT | ADMIN
3. **JWT Token** - Stored in localStorage
4. **Role Verification** - Backend validates user permissions

### 👤 **Personalized Dashboard (After Login)**

#### **👨🎓 STUDENT Portal**
- 📝 My Assignments
- 📊 My Results & Grades
- 📅 My Timetable
- 💳 Fee Status

#### **👨🏫 TEACHER Portal**
- 👨🏫 Manage Classes
- 📋 Student Records
- 📝 Create Assignments
- ✅ Mark Attendance

#### **👨👩👧👦 PARENT Portal**
- 📈 Child's Progress
- 💳 Fee Payment
- 💬 Teacher Communication
- 🎉 School Events

#### **🔧 ADMIN Panel**
- 👥 User Management
- 📊 School Analytics
- ⚙️ System Settings
- 📈 Generate Reports

## Architecture

### 🌿 **Data Branch Strategy**
- **Main Branch**: Clean application code only
- **Data Branch**: School-specific content and configurations
- **Dynamic Loading**: Real-time content fetching from GitHub
- **Zero Deployment Impact**: Data changes don't trigger code deployment

### 📁 **Data Structure**
```
data/schools/{school-slug}/
├── config/
│   └── school.json           # School configuration
├── i18n/
│   ├── config.json          # Language settings
│   └── translations/        # Multi-language support
│       ├── en.json
│       ├── hi.json
│       └── mr.json
├── content/
│   ├── news.json            # Latest news
│   ├── events.json          # Upcoming events
│   ├── testimonials.json    # Community feedback
│   ├── notifications.json   # School announcements
│   ├── principal.json       # Principal's message
│   └── quick-links.json     # Role-based quick actions
└── assets/
    ├── images/
    └── documents/
```

### 🔄 **Content Loading Flow**
1. **School Selection** → Load school config
2. **Language Detection** → Load translations
3. **Public Content** → Load news, events, testimonials
4. **User Login** → Load role-based quick links
5. **Personalization** → Display relevant dashboard

### 🌐 **Multi-Language Support**
- **Languages**: English, Hindi (हिंदी), Marathi (मराठी)
- **School-Specific**: Each school can customize translations
- **Dynamic Loading**: Translations loaded from data branch
- **Fallback System**: English as default fallback

## Adding New Schools

1. **Switch to data branch**:
   ```bash
   git checkout data
   ```

2. **Create school structure**:
   ```bash
   mkdir -p data/schools/{school-slug}/{config,i18n/translations,content,assets}
   ```

3. **Add required files**:
   - `config/school.json` - School information
   - `i18n/config.json` - Language configuration
   - `i18n/translations/{lang}.json` - Translations
   - `content/*.json` - All content files

4. **Commit and deploy**:
   ```bash
   git add -A && git commit -m "feat: add new school"
   git push origin data
   ```

## Development

### 🛠 **Local Development**
- Application uses fallback data when data branch is unavailable
- Hot reload for code changes
- Dynamic content loading for testing

### 🚀 **Production Deployment**
- **Main Branch**: Deployed to Netlify
- **Data Branch**: Serves as content CDN via GitHub raw URLs
- **Automatic Updates**: Content changes reflect immediately

### 🔧 **Environment Variables**
```env
NEXT_PUBLIC_DATA_BRANCH_URL=https://raw.githubusercontent.com/SevanandYadav/edu-tech-saas/data
NEXT_PUBLIC_API_URL=http://localhost:8080
```

## Benefits

- ✅ **Multi-Tenant**: Each school has independent branding and content
- ✅ **Role-Based Access**: Personalized experience per user type
- ✅ **Scalable**: Easy to add new schools without code changes
- ✅ **Maintainable**: Clean separation of code and content
- ✅ **International**: Multi-language support
- ✅ **Secure**: JWT-based authentication with role validation
- ✅ **Fast**: Dynamic content loading with caching
- ✅ **Flexible**: Content managers can update data independently