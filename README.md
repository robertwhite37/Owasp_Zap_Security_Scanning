<a href="https://robertwhite.vercel.app/" target="_blank">
  <img src="https://raw.githubusercontent.com/robertwhite37/robertwhite37/main/3.png" alt="Robert White Logo" width="300">
</a>


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
