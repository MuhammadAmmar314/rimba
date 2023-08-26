const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Endpoint untuk login
server.post('/users/login', (req, res) => {
  const { username, password } = req.body;
  const users = router.db.get('users').value();

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
