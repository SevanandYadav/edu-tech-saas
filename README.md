# School Data Repository

This branch contains **only school data** - no application code.

## Structure
```
data/
└── schools/
    ├── jj/
    │   ├── config/
    │   │   └── school.json
    │   ├── assets/
    │   │   ├── Interschool_Competition.png
    │   │   └── Science_Project.png
    │   └── i18n/
    │       ├── config.json
    │       └── translations/
    │           ├── en.json
    │           ├── hi.json
    │           └── mr.json
    └── demo/
        ├── config/
        │   └── school.json
        ├── assets/
        └── i18n/
            ├── config.json
            └── translations/
                ├── en.json
                ├── hi.json
                └── mr.json
```

## Adding New School
1. Create: `data/schools/{school-slug}/`
2. Add config: `data/schools/{school-slug}/config/school.json`
3. Add assets: `data/schools/{school-slug}/assets/`
4. Add i18n: `data/schools/{school-slug}/i18n/config.json` and translations
5. Commit and push

## Access URLs
- School Config: `https://raw.githubusercontent.com/SevanandYadav/edu-tech-saas/data/data/schools/{slug}/config/school.json`
- School Assets: `https://raw.githubusercontent.com/SevanandYadav/edu-tech-saas/data/data/schools/{slug}/assets/{filename}`
- School i18n Config: `https://raw.githubusercontent.com/SevanandYadav/edu-tech-saas/data/data/schools/{slug}/i18n/config.json`
- School Translations: `https://raw.githubusercontent.com/SevanandYadav/edu-tech-saas/data/data/schools/{slug}/i18n/translations/{lang}.json`

## Benefits
- ✅ Data changes don't trigger main branch deployment
- ✅ Independent school management
- ✅ Clean separation of concerns