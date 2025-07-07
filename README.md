[![N|Solid](https://raw.githubusercontent.com/robertwhite37/robertwhite37/main/3.png)]([https://bobit37.github.io/Resume/](https://robertwhite.vercel.app/))

Run security tests with docker compose

From root dir, run:

```bash
docker-compose -f test/features/security_tests/docker-compose.yml up --build -d
```

To see reports, navigate `test/features/security_tests/reports`

---

To run from locally, from root dir run followings:

```bash
docker-compose -f test/features/security_tests/docker-compose.yml up -d owsapzap
cd test/features/security_tests
yarn start
```
