# School Data Branch

This branch contains all school-specific data and configurations.

## Structure
```
data/
├── schools/
│   ├── jj/
│   │   ├── config/
│   │   │   └── school.json
│   │   └── assets/
│   │       ├── images/
│   │       └── documents/
│   └── demo/
│       ├── config/
│       │   └── school.json
│       └── assets/
│           ├── images/
│           └── documents/
```

## Adding New School
1. Create folder: `data/schools/{school-slug}/`
2. Add config: `data/schools/{school-slug}/config/school.json`
3. Add assets: `data/schools/{school-slug}/assets/`

## Deployment
- Changes to this branch don't trigger main branch deployment
- Data is fetched dynamically by the main application
- Use GitHub API or submodules to access data from main branch