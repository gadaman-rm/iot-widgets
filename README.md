### use
```
yarn plop widget Foo g-foo
yarn plop components Bar HTMLDivElement div g-bar
```

## Code Analysis
### Count line
```
cloc --fullpath \
 --not-match-d='(node_modules|dist|plop_templates)' \
 --not-match-f='(plopfile.mjs|.dependency-cruiser.cjs)' \
 --exclude-list-file=notcount .
```
