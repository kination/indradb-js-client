// GENERATED CODE -- DO NOT EDIT!

// package: indradb
// file: indradb.proto

import * as indradb_pb from "./indradb_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IIndraDBService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  ping: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
  sync: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
  createVertex: grpc.MethodDefinition<indradb_pb.Vertex, indradb_pb.CreateResponse>;
  createVertexFromType: grpc.MethodDefinition<indradb_pb.Identifier, indradb_pb.Uuid>;
  createEdge: grpc.MethodDefinition<indradb_pb.Edge, indradb_pb.CreateResponse>;
  get: grpc.MethodDefinition<indradb_pb.Query, indradb_pb.QueryOutputValue>;
  delete: grpc.MethodDefinition<indradb_pb.Query, google_protobuf_empty_pb.Empty>;
  setProperties: grpc.MethodDefinition<indradb_pb.SetPropertiesRequest, google_protobuf_empty_pb.Empty>;
  bulkInsert: grpc.MethodDefinition<indradb_pb.BulkInsertItem, google_protobuf_empty_pb.Empty>;
  indexProperty: grpc.MethodDefinition<indradb_pb.IndexPropertyRequest, google_protobuf_empty_pb.Empty>;
  executePlugin: grpc.MethodDefinition<indradb_pb.ExecutePluginRequest, indradb_pb.ExecutePluginResponse>;
}

export const IndraDBService: IIndraDBService;

export interface IIndraDBServer extends grpc.UntypedServiceImplementation {
  ping: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
  sync: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
  createVertex: grpc.handleUnaryCall<indradb_pb.Vertex, indradb_pb.CreateResponse>;
  createVertexFromType: grpc.handleUnaryCall<indradb_pb.Identifier, indradb_pb.Uuid>;
  createEdge: grpc.handleUnaryCall<indradb_pb.Edge, indradb_pb.CreateResponse>;
  get: grpc.handleServerStreamingCall<indradb_pb.Query, indradb_pb.QueryOutputValue>;
  delete: grpc.handleUnaryCall<indradb_pb.Query, google_protobuf_empty_pb.Empty>;
  setProperties: grpc.handleUnaryCall<indradb_pb.SetPropertiesRequest, google_protobuf_empty_pb.Empty>;
  bulkInsert: grpc.handleClientStreamingCall<indradb_pb.BulkInsertItem, google_protobuf_empty_pb.Empty>;
  indexProperty: grpc.handleUnaryCall<indradb_pb.IndexPropertyRequest, google_protobuf_empty_pb.Empty>;
  executePlugin: grpc.handleUnaryCall<indradb_pb.ExecutePluginRequest, indradb_pb.ExecutePluginResponse>;
}

export class IndraDBClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  ping(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  ping(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  ping(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  sync(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  sync(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  sync(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createVertex(argument: indradb_pb.Vertex, callback: grpc.requestCallback<indradb_pb.CreateResponse>): grpc.ClientUnaryCall;
  createVertex(argument: indradb_pb.Vertex, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<indradb_pb.CreateResponse>): grpc.ClientUnaryCall;
  createVertex(argument: indradb_pb.Vertex, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<indradb_pb.CreateResponse>): grpc.ClientUnaryCall;
  createVertexFromType(argument: indradb_pb.Identifier, callback: grpc.requestCallback<indradb_pb.Uuid>): grpc.ClientUnaryCall;
  createVertexFromType(argument: indradb_pb.Identifier, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<indradb_pb.Uuid>): grpc.ClientUnaryCall;
  createVertexFromType(argument: indradb_pb.Identifier, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<indradb_pb.Uuid>): grpc.ClientUnaryCall;
  createEdge(argument: indradb_pb.Edge, callback: grpc.requestCallback<indradb_pb.CreateResponse>): grpc.ClientUnaryCall;
  createEdge(argument: indradb_pb.Edge, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<indradb_pb.CreateResponse>): grpc.ClientUnaryCall;
  createEdge(argument: indradb_pb.Edge, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<indradb_pb.CreateResponse>): grpc.ClientUnaryCall;
  get(argument: indradb_pb.Query, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<indradb_pb.QueryOutputValue>;
  get(argument: indradb_pb.Query, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<indradb_pb.QueryOutputValue>;
  delete(argument: indradb_pb.Query, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: indradb_pb.Query, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: indradb_pb.Query, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  setProperties(argument: indradb_pb.SetPropertiesRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  setProperties(argument: indradb_pb.SetPropertiesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  setProperties(argument: indradb_pb.SetPropertiesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  bulkInsert(callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientWritableStream<indradb_pb.BulkInsertItem>;
  bulkInsert(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientWritableStream<indradb_pb.BulkInsertItem>;
  bulkInsert(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientWritableStream<indradb_pb.BulkInsertItem>;
  indexProperty(argument: indradb_pb.IndexPropertyRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  indexProperty(argument: indradb_pb.IndexPropertyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  indexProperty(argument: indradb_pb.IndexPropertyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  executePlugin(argument: indradb_pb.ExecutePluginRequest, callback: grpc.requestCallback<indradb_pb.ExecutePluginResponse>): grpc.ClientUnaryCall;
  executePlugin(argument: indradb_pb.ExecutePluginRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<indradb_pb.ExecutePluginResponse>): grpc.ClientUnaryCall;
  executePlugin(argument: indradb_pb.ExecutePluginRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<indradb_pb.ExecutePluginResponse>): grpc.ClientUnaryCall;
}
