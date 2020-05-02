const servers = [{
    name: "server1",
    id: 1233,
    status: 1
  },
  {
    name: "server2",
    id: 1234,
    status: 0
  },
  {
    name: "server3",
    id: 1235,
    status: 1
  },
  {
    name: "server4",
    id: 1236,
    status: 0
  },
  {
    name: "server5",
    id: 1237,
    status: 0
  },
  {
    name: "server6",
    id: 1238,
    status: 0
  },
  {
    name: "server7",
    id: 1239,
    status: 0
  },
  {
    name: "server8",
    id: 12390,
    status: 0
  }
];

class Server {
  getServers() {
    return [...servers];
  }
  addServer(name, status) {
    const newId = Math.max(...servers.map(el => el.id)) + 1;
    const newServer = {
      name,
      status,
      last_updated: new Date(),
      id: newId
    };
    servers.push(newServer);
  }
  removeServer(id) {
    const getIndexById = servers.findIndex(el => el["id"] === id);
    return servers.splice(getIndexById, 1);
  }
  getServerById(id) {
    return servers.find(el => el["id"] === id);
  }

  toggleServerStatus(id) {
    const serverToToggle = this.getServerById(id);
    return (serverToToggle.status = Number(!serverToToggle.status));
  }
  getOnlineServers(status) {
    return servers.filter(el => el.status === 1);
  }
  getOfflineServers(status) {
    return servers.filter(el => el.status === 0);
  }
}
const serverExtra = new Server();
console.log(serverExtra.getServers());