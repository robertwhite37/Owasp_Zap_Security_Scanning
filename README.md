[![N|Solid](https://bobit.us/wp-content/uploads/2021/04/bobit-logo.png)](https://bobit37.github.io/Resume/)

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
