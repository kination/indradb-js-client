import { Server, ServerCredentials} from "@grpc/grpc-js";
import { Observable } from "rxjs";
import { IndraDBClientImpl, Vertex } from "./indradb"
import { Empty } from "./google/protobuf/empty"

const vertex: Vertex = {id: {value: new Uint8Array(1)}, t: undefined}

const idb = new IndraDBClientImpl(
  {
    request(service, method, data) {
      return Promise.resolve(new Uint8Array())
    },
    clientStreamingRequest(service, method, data) { 
      return Promise.resolve(new Uint8Array())
    },
    serverStreamingRequest(service, method, data) { 
      return new Observable<Uint8Array>
    },
    bidirectionalStreamingRequest(service, method, data) {
      return new Observable<Uint8Array>
    }
  },
);

const server = new Server();
idb.CreateVertex(vertex).then((resp) => {
  console.log(resp)
})




// const ping = idb.Ping(Empty).then((resp) => {
//   console.log(resp)
// })

