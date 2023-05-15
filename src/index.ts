import * as grpc from '@grpc/grpc-js';
import { IndraDBClient } from './proto/indradb_grpc_pb';
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

const host = '127.0.0.1:27615';

const client = new IndraDBClient(host, grpc.credentials.createInsecure());
const empty_pb = new google_protobuf_empty_pb.Empty
client.ping(empty_pb, (err: any, resp: any) => {
  console.log(resp)
})


