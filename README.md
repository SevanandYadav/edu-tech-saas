# School Data Repository

This branch contains **only school data** - no application code.

## Structure
```
data/
├── schools/
│   ├── jj/
│   │   ├── config/
│   │   │   └── school.json
│   │   └── assets/
│   │       ├── Interschool_Competition.png
│   │       └── Science_Project.png
│   └── demo/
│       ├── config/
│       │   └── school.json
│       └── assets/
```

## Adding New School
1. Create: `data/schools/{school-slug}/`
2. Add config: `data/schools/{school-slug}/config/school.json`
3. Add assets: `data/schools/{school-slug}/assets/`
4. Commit and push

## Access URLs
- Config: `https://raw.githubusercontent.com/SevanandYadav/edu-tech-saas/data/data/schools/{slug}/config/school.json`
- Assets: `https://raw.githubusercontent.com/SevanandYadav/edu-tech-saas/data/data/schools/{slug}/assets/{filename}`

## Benefits
- ✅ Data changes don't trigger main branch deployment
- ✅ Independent school management
- ✅ Clean separation of concerns