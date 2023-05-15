// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var indradb_pb = require('./indradb_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_indradb_BulkInsertItem(arg) {
  if (!(arg instanceof indradb_pb.BulkInsertItem)) {
    throw new Error('Expected argument of type indradb.BulkInsertItem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_indradb_BulkInsertItem(buffer_arg) {
  return indradb_pb.BulkInsertItem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_indradb_CreateResponse(arg) {
  if (!(arg instanceof indradb_pb.CreateResponse)) {
    throw new Error('Expected argument of type indradb.CreateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_indradb_CreateResponse(buffer_arg) {
  return indradb_pb.CreateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_indradb_Edge(arg) {
  if (!(arg instanceof indradb_pb.Edge)) {
    throw new Error('Expected argument of type indradb.Edge');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_indradb_Edge(buffer_arg) {
  return indradb_pb.Edge.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_indradb_ExecutePluginRequest(arg) {
  if (!(arg instanceof indradb_pb.ExecutePluginRequest)) {
    throw new Error('Expected argument of type indradb.ExecutePluginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_indradb_ExecutePluginRequest(buffer_arg) {
  return indradb_pb.ExecutePluginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_indradb_ExecutePluginResponse(arg) {
  if (!(arg instanceof indradb_pb.ExecutePluginResponse)) {
    throw new Error('Expected argument of type indradb.ExecutePluginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_indradb_ExecutePluginResponse(buffer_arg) {
  return indradb_pb.ExecutePluginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_indradb_Identifier(arg) {
  if (!(arg instanceof indradb_pb.Identifier)) {
    throw new Error('Expected argument of type indradb.Identifier');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_indradb_Identifier(buffer_arg) {
  return indradb_pb.Identifier.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_indradb_IndexPropertyRequest(arg) {
  if (!(arg instanceof indradb_pb.IndexPropertyRequest)) {
    throw new Error('Expected argument of type indradb.IndexPropertyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_indradb_IndexPropertyRequest(buffer_arg) {
  return indradb_pb.IndexPropertyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_indradb_Query(arg) {
  if (!(arg instanceof indradb_pb.Query)) {
    throw new Error('Expected argument of type indradb.Query');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_indradb_Query(buffer_arg) {
  return indradb_pb.Query.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_indradb_QueryOutputValue(arg) {
  if (!(arg instanceof indradb_pb.QueryOutputValue)) {
    throw new Error('Expected argument of type indradb.QueryOutputValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_indradb_QueryOutputValue(buffer_arg) {
  return indradb_pb.QueryOutputValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_indradb_SetPropertiesRequest(arg) {
  if (!(arg instanceof indradb_pb.SetPropertiesRequest)) {
    throw new Error('Expected argument of type indradb.SetPropertiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_indradb_SetPropertiesRequest(buffer_arg) {
  return indradb_pb.SetPropertiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_indradb_Uuid(arg) {
  if (!(arg instanceof indradb_pb.Uuid)) {
    throw new Error('Expected argument of type indradb.Uuid');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_indradb_Uuid(buffer_arg) {
  return indradb_pb.Uuid.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_indradb_Vertex(arg) {
  if (!(arg instanceof indradb_pb.Vertex)) {
    throw new Error('Expected argument of type indradb.Vertex');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_indradb_Vertex(buffer_arg) {
  return indradb_pb.Vertex.deserializeBinary(new Uint8Array(buffer_arg));
}


var IndraDBService = exports.IndraDBService = {
  // Pings the server.
ping: {
    path: '/indradb.IndraDB/Ping',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Syncs persisted content. Depending on the datastore implementation,
// this has different meanings - including potentially being a no-op.
sync: {
    path: '/indradb.IndraDB/Sync',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a new vertex.
createVertex: {
    path: '/indradb.IndraDB/CreateVertex',
    requestStream: false,
    responseStream: false,
    requestType: indradb_pb.Vertex,
    responseType: indradb_pb.CreateResponse,
    requestSerialize: serialize_indradb_Vertex,
    requestDeserialize: deserialize_indradb_Vertex,
    responseSerialize: serialize_indradb_CreateResponse,
    responseDeserialize: deserialize_indradb_CreateResponse,
  },
  // Creates a new vertex with just a type specification. As opposed to
// `CreateVertex`, this is used when you do not want to manually specify
// the vertex's UUID. Returns the new vertex's UUID.
createVertexFromType: {
    path: '/indradb.IndraDB/CreateVertexFromType',
    requestStream: false,
    responseStream: false,
    requestType: indradb_pb.Identifier,
    responseType: indradb_pb.Uuid,
    requestSerialize: serialize_indradb_Identifier,
    requestDeserialize: deserialize_indradb_Identifier,
    responseSerialize: serialize_indradb_Uuid,
    responseDeserialize: deserialize_indradb_Uuid,
  },
  // Creates a new edge.
createEdge: {
    path: '/indradb.IndraDB/CreateEdge',
    requestStream: false,
    responseStream: false,
    requestType: indradb_pb.Edge,
    responseType: indradb_pb.CreateResponse,
    requestSerialize: serialize_indradb_Edge,
    requestDeserialize: deserialize_indradb_Edge,
    responseSerialize: serialize_indradb_CreateResponse,
    responseDeserialize: deserialize_indradb_CreateResponse,
  },
  // Gets values specified by a query.
get: {
    path: '/indradb.IndraDB/Get',
    requestStream: false,
    responseStream: true,
    requestType: indradb_pb.Query,
    responseType: indradb_pb.QueryOutputValue,
    requestSerialize: serialize_indradb_Query,
    requestDeserialize: deserialize_indradb_Query,
    responseSerialize: serialize_indradb_QueryOutputValue,
    responseDeserialize: deserialize_indradb_QueryOutputValue,
  },
  // Deletes values specified by a query.
delete: {
    path: '/indradb.IndraDB/Delete',
    requestStream: false,
    responseStream: false,
    requestType: indradb_pb.Query,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_indradb_Query,
    requestDeserialize: deserialize_indradb_Query,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Sets properties.
setProperties: {
    path: '/indradb.IndraDB/SetProperties',
    requestStream: false,
    responseStream: false,
    requestType: indradb_pb.SetPropertiesRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_indradb_SetPropertiesRequest,
    requestDeserialize: deserialize_indradb_SetPropertiesRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Bulk inserts many vertices, edges, and/or properties.
//
// Note that datastores have discretion on how to approach safeguard vs
// performance tradeoffs. In particular:
// * If the datastore is disk-backed, it may or may not flush before
//   returning.
// * The datastore might not verify for correctness; e.g., it might not
//   ensure that the relevant vertices exist before inserting an edge.
bulkInsert: {
    path: '/indradb.IndraDB/BulkInsert',
    requestStream: true,
    responseStream: false,
    requestType: indradb_pb.BulkInsertItem,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_indradb_BulkInsertItem,
    requestDeserialize: deserialize_indradb_BulkInsertItem,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Enables indexing on a specified property. When indexing is enabled on a
// property, it's possible to query on its presence and values.
indexProperty: {
    path: '/indradb.IndraDB/IndexProperty',
    requestStream: false,
    responseStream: false,
    requestType: indradb_pb.IndexPropertyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_indradb_IndexPropertyRequest,
    requestDeserialize: deserialize_indradb_IndexPropertyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Executes a plugin and returns back the response from the plugin.
executePlugin: {
    path: '/indradb.IndraDB/ExecutePlugin',
    requestStream: false,
    responseStream: false,
    requestType: indradb_pb.ExecutePluginRequest,
    responseType: indradb_pb.ExecutePluginResponse,
    requestSerialize: serialize_indradb_ExecutePluginRequest,
    requestDeserialize: deserialize_indradb_ExecutePluginRequest,
    responseSerialize: serialize_indradb_ExecutePluginResponse,
    responseDeserialize: deserialize_indradb_ExecutePluginResponse,
  },
};

exports.IndraDBClient = grpc.makeGenericClientConstructor(IndraDBService);
