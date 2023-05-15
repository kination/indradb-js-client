/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Empty } from "./google/protobuf/empty";

export const protobufPackage = "indradb";

/**
 * Specifies what kind of items should be piped from one type of query to
 * another.
 *
 * Edge and vertex queries can build off of one another via pipes - e.g. you
 * can get the outbound edges of a set of vertices by piping from a vertex
 * query to an edge query. `EdgeDirection`s are used to specify which
 * end of things you want to pipe - either the outbound items or the inbound
 * items.
 */
export enum EdgeDirection {
  OUTBOUND = 0,
  INBOUND = 1,
  UNRECOGNIZED = -1,
}

export function edgeDirectionFromJSON(object: any): EdgeDirection {
  switch (object) {
    case 0:
    case "OUTBOUND":
      return EdgeDirection.OUTBOUND;
    case 1:
    case "INBOUND":
      return EdgeDirection.INBOUND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EdgeDirection.UNRECOGNIZED;
  }
}

export function edgeDirectionToJSON(object: EdgeDirection): string {
  switch (object) {
    case EdgeDirection.OUTBOUND:
      return "OUTBOUND";
    case EdgeDirection.INBOUND:
      return "INBOUND";
    case EdgeDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A UUID. */
export interface Uuid {
  value: Uint8Array;
}

/**
 * A string that must be less than 256 characters long, and can only contain
 * letters, numbers, dashes and underscores. This is used for vertex and edge
 * types, as well as property names.
 */
export interface Identifier {
  value: string;
}

/** A JSON value. */
export interface Json {
  value: string;
}

/**
 * An edge.
 *
 * Edges are how you would represent a verb or a relationship in the
 * datastore. An example might be "liked" or "reviewed". Edges are typed and
 * directed.
 */
export interface Edge {
  /** The id of the outbound vertex. */
  outboundId:
    | Uuid
    | undefined;
  /** The type of the edge. */
  t:
    | Identifier
    | undefined;
  /** The id of the inbound vertex. */
  inboundId: Uuid | undefined;
}

/**
 * A vertex.
 *
 * Vertices are how you would represent nouns in the datastore. An example
 * might be a user, or a movie. All vertices have a unique ID and a type.
 */
export interface Vertex {
  /** The id of the vertex. */
  id:
    | Uuid
    | undefined;
  /** The type of the vertex. */
  t: Identifier | undefined;
}

/** A query to get a set of values from the database. */
export interface Query {
  /** Gets all vertices. */
  allVertex?:
    | Empty
    | undefined;
  /** Gets a range of vertices. */
  rangeVertex?:
    | RangeVertexQuery
    | undefined;
  /** Gets a specific set of vertices. */
  specificVertex?:
    | SpecificVertexQuery
    | undefined;
  /** Gets vertices with or without a given property. */
  vertexWithPropertyPresence?:
    | VertexWithPropertyPresenceQuery
    | undefined;
  /** Gets vertices with a property equal to a given value. */
  vertexWithPropertyValue?:
    | VertexWithPropertyValueQuery
    | undefined;
  /** Gets all edges. */
  allEdge?:
    | Empty
    | undefined;
  /** Gets a specific set of edges. */
  specificEdge?:
    | SpecificEdgeQuery
    | undefined;
  /** Gets edges with or without a given property. */
  edgeWithPropertyPresence?:
    | EdgeWithPropertyPresenceQuery
    | undefined;
  /** Gets edges with a property equal to a given value. */
  edgeWithPropertyValue?:
    | EdgeWithPropertyValueQuery
    | undefined;
  /**
   * Gets the vertices associated with edges, or edges associated with
   * vertices.
   */
  pipe?:
    | PipeQuery
    | undefined;
  /** Returns the properties associated with a vertex or edge. */
  pipeProperty?:
    | PipePropertyQuery
    | undefined;
  /** Gets vertices or edges with or without a property. */
  pipeWithPropertyPresence?:
    | PipeWithPropertyPresenceQuery
    | undefined;
  /** Gets vertices or edges with a property equal to a given value. */
  pipeWithPropertyValue?:
    | PipeWithPropertyValueQuery
    | undefined;
  /** Includes the results of a query in output. */
  include?:
    | IncludeQuery
    | undefined;
  /** Counts the number of items returned from a query. */
  count?: CountQuery | undefined;
}

/** Gets a range of vertices. */
export interface RangeVertexQuery {
  /** Limits the number of vertices to get. */
  limit: number;
  /** Filters the type of vertices returned. */
  t:
    | Identifier
    | undefined;
  /** Sets the lowest vertex ID to return. */
  startId: Uuid | undefined;
}

/** Gets a specific set of vertices. */
export interface SpecificVertexQuery {
  /** The IDs of the vertices to get. */
  ids: Uuid[];
}

/** Gets vertices with or without a given property. */
export interface VertexWithPropertyPresenceQuery {
  /** The name of the property. */
  name: Identifier | undefined;
}

/** Gets vertices with a property equal to a given value. */
export interface VertexWithPropertyValueQuery {
  /** The name of the property. */
  name:
    | Identifier
    | undefined;
  /** The value of the property. */
  value: Json | undefined;
}

/** Gets a specific set of edges. */
export interface SpecificEdgeQuery {
  /** The edges to get. */
  edges: Edge[];
}

/** Gets edges with or without a given property. */
export interface EdgeWithPropertyPresenceQuery {
  /** The name of the property. */
  name: Identifier | undefined;
}

/** Gets edges with a property equal to a given value. */
export interface EdgeWithPropertyValueQuery {
  /** The name of the property. */
  name:
    | Identifier
    | undefined;
  /** The value of the property. */
  value: Json | undefined;
}

/**
 * Gets the vertices associated with edges, or edges associated with
 * vertices.
 */
export interface PipeQuery {
  /** The query to build off of. */
  inner:
    | Query
    | undefined;
  /** Whether to get outbound or inbound vertices on the edges. */
  direction: EdgeDirection;
  /** Limits the number of vertices to get. */
  limit: number;
  /** Filters the type of vertices returned. */
  t: Identifier | undefined;
}

/** Returns the properties associated with a vertex or edge. */
export interface PipePropertyQuery {
  /** The inner query. */
  inner:
    | Query
    | undefined;
  /** The property name to get. If `None`, all properties will be fetched. */
  name: Identifier | undefined;
}

/** Gets vertices or edges with or without a property. */
export interface PipeWithPropertyPresenceQuery {
  /** The query to filter. */
  inner:
    | Query
    | undefined;
  /** The name of the property. */
  name:
    | Identifier
    | undefined;
  /** Whether we should look for property presence or lack thereof. */
  exists: boolean;
}

/** Gets vertices or edges with a property equal to a given value. */
export interface PipeWithPropertyValueQuery {
  /** The query to filter. */
  inner:
    | Query
    | undefined;
  /** The name of the property. */
  name:
    | Identifier
    | undefined;
  /** The value of the property. */
  value:
    | Json
    | undefined;
  /** Whether we should look for property equality or non-equality. */
  equal: boolean;
}

/**
 * Includes the results of a query in output.
 *
 * The outermost part of a query will always be explicitly included. This
 * allows you to also output an intermediate result.
 */
export interface IncludeQuery {
  /** The query to export. */
  inner: Query | undefined;
}

/** Counts the number of items returned from a query. */
export interface CountQuery {
  /** The query to export. */
  inner: Query | undefined;
}

/** Value(s) returned from a query. */
export interface QueryOutputValue {
  vertices?: QueryOutputVertices | undefined;
  edges?: QueryOutputEdges | undefined;
  count?: number | undefined;
  vertexProperties?: QueryOutputVertexProperties | undefined;
  edgeProperties?: QueryOutputEdgeProperties | undefined;
}

export interface QueryOutputVertices {
  vertices: Vertex[];
}

export interface QueryOutputEdges {
  edges: Edge[];
}

export interface QueryOutputVertexProperties {
  vertexProperties: VertexProperties[];
}

export interface QueryOutputEdgeProperties {
  edgeProperties: EdgeProperties[];
}

/** A property. */
export interface NamedProperty {
  /** The id of the vertex. */
  name:
    | Identifier
    | undefined;
  /** The property value. */
  value: Json | undefined;
}

/** Represents a vertex property. */
export interface VertexProperty {
  /** The id of the vertex. */
  id:
    | Uuid
    | undefined;
  /** The property value. */
  value: Json | undefined;
}

/** A vertex with properties. */
export interface VertexProperties {
  /** The vertex. */
  vertex:
    | Vertex
    | undefined;
  /** All of the vertex's properties. */
  props: NamedProperty[];
}

/** Represents an edge property. */
export interface EdgeProperty {
  /** The edge. */
  edge:
    | Edge
    | undefined;
  /** The property value. */
  value: Json | undefined;
}

/** An edge with properties. */
export interface EdgeProperties {
  /** The edge. */
  edge:
    | Edge
    | undefined;
  /** All of the edge's properties. */
  props: NamedProperty[];
}

/** An item to insert, as part of a bulk insert request. */
export interface BulkInsertItem {
  vertex?: Vertex | undefined;
  edge?: Edge | undefined;
  vertexProperty?: VertexPropertyBulkInsertItem | undefined;
  edgeProperty?: EdgePropertyBulkInsertItem | undefined;
}

/** A vertex property to insert. */
export interface VertexPropertyBulkInsertItem {
  id: Uuid | undefined;
  name: Identifier | undefined;
  value: Json | undefined;
}

/** An edge property to insert. */
export interface EdgePropertyBulkInsertItem {
  edge: Edge | undefined;
  name: Identifier | undefined;
  value: Json | undefined;
}

/** A request to index a property. */
export interface IndexPropertyRequest {
  name: Identifier | undefined;
}

export interface SetPropertiesRequest {
  q: Query | undefined;
  name: Identifier | undefined;
  value: Json | undefined;
}

export interface CreateResponse {
  created: boolean;
}

/** A request to execute a plugin. */
export interface ExecutePluginRequest {
  name: string;
  arg: Json | undefined;
}

/** A response to a plugin execution. */
export interface ExecutePluginResponse {
  value: Json | undefined;
}

function createBaseUuid(): Uuid {
  return { value: new Uint8Array() };
}

export const Uuid = {
  encode(message: Uuid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Uuid {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUuid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Uuid {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array() };
  },

  toJSON(message: Uuid): unknown {
    const obj: any = {};
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<Uuid>, I>>(base?: I): Uuid {
    return Uuid.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Uuid>, I>>(object: I): Uuid {
    const message = createBaseUuid();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseIdentifier(): Identifier {
  return { value: "" };
}

export const Identifier = {
  encode(message: Identifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Identifier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Identifier {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Identifier): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Identifier>, I>>(base?: I): Identifier {
    return Identifier.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Identifier>, I>>(object: I): Identifier {
    const message = createBaseIdentifier();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseJson(): Json {
  return { value: "" };
}

export const Json = {
  encode(message: Json, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Json {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJson();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Json {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Json): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<Json>, I>>(base?: I): Json {
    return Json.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Json>, I>>(object: I): Json {
    const message = createBaseJson();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseEdge(): Edge {
  return { outboundId: undefined, t: undefined, inboundId: undefined };
}

export const Edge = {
  encode(message: Edge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.outboundId !== undefined) {
      Uuid.encode(message.outboundId, writer.uint32(10).fork()).ldelim();
    }
    if (message.t !== undefined) {
      Identifier.encode(message.t, writer.uint32(18).fork()).ldelim();
    }
    if (message.inboundId !== undefined) {
      Uuid.encode(message.inboundId, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Edge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEdge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.outboundId = Uuid.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.t = Identifier.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.inboundId = Uuid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Edge {
    return {
      outboundId: isSet(object.outboundId) ? Uuid.fromJSON(object.outboundId) : undefined,
      t: isSet(object.t) ? Identifier.fromJSON(object.t) : undefined,
      inboundId: isSet(object.inboundId) ? Uuid.fromJSON(object.inboundId) : undefined,
    };
  },

  toJSON(message: Edge): unknown {
    const obj: any = {};
    message.outboundId !== undefined &&
      (obj.outboundId = message.outboundId ? Uuid.toJSON(message.outboundId) : undefined);
    message.t !== undefined && (obj.t = message.t ? Identifier.toJSON(message.t) : undefined);
    message.inboundId !== undefined && (obj.inboundId = message.inboundId ? Uuid.toJSON(message.inboundId) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Edge>, I>>(base?: I): Edge {
    return Edge.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Edge>, I>>(object: I): Edge {
    const message = createBaseEdge();
    message.outboundId = (object.outboundId !== undefined && object.outboundId !== null)
      ? Uuid.fromPartial(object.outboundId)
      : undefined;
    message.t = (object.t !== undefined && object.t !== null) ? Identifier.fromPartial(object.t) : undefined;
    message.inboundId = (object.inboundId !== undefined && object.inboundId !== null)
      ? Uuid.fromPartial(object.inboundId)
      : undefined;
    return message;
  },
};

function createBaseVertex(): Vertex {
  return { id: undefined, t: undefined };
}

export const Vertex = {
  encode(message: Vertex, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      Uuid.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.t !== undefined) {
      Identifier.encode(message.t, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vertex {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVertex();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = Uuid.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.t = Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Vertex {
    return {
      id: isSet(object.id) ? Uuid.fromJSON(object.id) : undefined,
      t: isSet(object.t) ? Identifier.fromJSON(object.t) : undefined,
    };
  },

  toJSON(message: Vertex): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? Uuid.toJSON(message.id) : undefined);
    message.t !== undefined && (obj.t = message.t ? Identifier.toJSON(message.t) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Vertex>, I>>(base?: I): Vertex {
    return Vertex.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Vertex>, I>>(object: I): Vertex {
    const message = createBaseVertex();
    message.id = (object.id !== undefined && object.id !== null) ? Uuid.fromPartial(object.id) : undefined;
    message.t = (object.t !== undefined && object.t !== null) ? Identifier.fromPartial(object.t) : undefined;
    return message;
  },
};

function createBaseQuery(): Query {
  return {
    allVertex: undefined,
    rangeVertex: undefined,
    specificVertex: undefined,
    vertexWithPropertyPresence: undefined,
    vertexWithPropertyValue: undefined,
    allEdge: undefined,
    specificEdge: undefined,
    edgeWithPropertyPresence: undefined,
    edgeWithPropertyValue: undefined,
    pipe: undefined,
    pipeProperty: undefined,
    pipeWithPropertyPresence: undefined,
    pipeWithPropertyValue: undefined,
    include: undefined,
    count: undefined,
  };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allVertex !== undefined) {
      Empty.encode(message.allVertex, writer.uint32(10).fork()).ldelim();
    }
    if (message.rangeVertex !== undefined) {
      RangeVertexQuery.encode(message.rangeVertex, writer.uint32(18).fork()).ldelim();
    }
    if (message.specificVertex !== undefined) {
      SpecificVertexQuery.encode(message.specificVertex, writer.uint32(26).fork()).ldelim();
    }
    if (message.vertexWithPropertyPresence !== undefined) {
      VertexWithPropertyPresenceQuery.encode(message.vertexWithPropertyPresence, writer.uint32(34).fork()).ldelim();
    }
    if (message.vertexWithPropertyValue !== undefined) {
      VertexWithPropertyValueQuery.encode(message.vertexWithPropertyValue, writer.uint32(42).fork()).ldelim();
    }
    if (message.allEdge !== undefined) {
      Empty.encode(message.allEdge, writer.uint32(50).fork()).ldelim();
    }
    if (message.specificEdge !== undefined) {
      SpecificEdgeQuery.encode(message.specificEdge, writer.uint32(58).fork()).ldelim();
    }
    if (message.edgeWithPropertyPresence !== undefined) {
      EdgeWithPropertyPresenceQuery.encode(message.edgeWithPropertyPresence, writer.uint32(66).fork()).ldelim();
    }
    if (message.edgeWithPropertyValue !== undefined) {
      EdgeWithPropertyValueQuery.encode(message.edgeWithPropertyValue, writer.uint32(74).fork()).ldelim();
    }
    if (message.pipe !== undefined) {
      PipeQuery.encode(message.pipe, writer.uint32(82).fork()).ldelim();
    }
    if (message.pipeProperty !== undefined) {
      PipePropertyQuery.encode(message.pipeProperty, writer.uint32(90).fork()).ldelim();
    }
    if (message.pipeWithPropertyPresence !== undefined) {
      PipeWithPropertyPresenceQuery.encode(message.pipeWithPropertyPresence, writer.uint32(98).fork()).ldelim();
    }
    if (message.pipeWithPropertyValue !== undefined) {
      PipeWithPropertyValueQuery.encode(message.pipeWithPropertyValue, writer.uint32(106).fork()).ldelim();
    }
    if (message.include !== undefined) {
      IncludeQuery.encode(message.include, writer.uint32(114).fork()).ldelim();
    }
    if (message.count !== undefined) {
      CountQuery.encode(message.count, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allVertex = Empty.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rangeVertex = RangeVertexQuery.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.specificVertex = SpecificVertexQuery.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.vertexWithPropertyPresence = VertexWithPropertyPresenceQuery.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.vertexWithPropertyValue = VertexWithPropertyValueQuery.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.allEdge = Empty.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.specificEdge = SpecificEdgeQuery.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.edgeWithPropertyPresence = EdgeWithPropertyPresenceQuery.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.edgeWithPropertyValue = EdgeWithPropertyValueQuery.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.pipe = PipeQuery.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.pipeProperty = PipePropertyQuery.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.pipeWithPropertyPresence = PipeWithPropertyPresenceQuery.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.pipeWithPropertyValue = PipeWithPropertyValueQuery.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.include = IncludeQuery.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.count = CountQuery.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Query {
    return {
      allVertex: isSet(object.allVertex) ? Empty.fromJSON(object.allVertex) : undefined,
      rangeVertex: isSet(object.rangeVertex) ? RangeVertexQuery.fromJSON(object.rangeVertex) : undefined,
      specificVertex: isSet(object.specificVertex) ? SpecificVertexQuery.fromJSON(object.specificVertex) : undefined,
      vertexWithPropertyPresence: isSet(object.vertexWithPropertyPresence)
        ? VertexWithPropertyPresenceQuery.fromJSON(object.vertexWithPropertyPresence)
        : undefined,
      vertexWithPropertyValue: isSet(object.vertexWithPropertyValue)
        ? VertexWithPropertyValueQuery.fromJSON(object.vertexWithPropertyValue)
        : undefined,
      allEdge: isSet(object.allEdge) ? Empty.fromJSON(object.allEdge) : undefined,
      specificEdge: isSet(object.specificEdge) ? SpecificEdgeQuery.fromJSON(object.specificEdge) : undefined,
      edgeWithPropertyPresence: isSet(object.edgeWithPropertyPresence)
        ? EdgeWithPropertyPresenceQuery.fromJSON(object.edgeWithPropertyPresence)
        : undefined,
      edgeWithPropertyValue: isSet(object.edgeWithPropertyValue)
        ? EdgeWithPropertyValueQuery.fromJSON(object.edgeWithPropertyValue)
        : undefined,
      pipe: isSet(object.pipe) ? PipeQuery.fromJSON(object.pipe) : undefined,
      pipeProperty: isSet(object.pipeProperty) ? PipePropertyQuery.fromJSON(object.pipeProperty) : undefined,
      pipeWithPropertyPresence: isSet(object.pipeWithPropertyPresence)
        ? PipeWithPropertyPresenceQuery.fromJSON(object.pipeWithPropertyPresence)
        : undefined,
      pipeWithPropertyValue: isSet(object.pipeWithPropertyValue)
        ? PipeWithPropertyValueQuery.fromJSON(object.pipeWithPropertyValue)
        : undefined,
      include: isSet(object.include) ? IncludeQuery.fromJSON(object.include) : undefined,
      count: isSet(object.count) ? CountQuery.fromJSON(object.count) : undefined,
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    message.allVertex !== undefined &&
      (obj.allVertex = message.allVertex ? Empty.toJSON(message.allVertex) : undefined);
    message.rangeVertex !== undefined &&
      (obj.rangeVertex = message.rangeVertex ? RangeVertexQuery.toJSON(message.rangeVertex) : undefined);
    message.specificVertex !== undefined &&
      (obj.specificVertex = message.specificVertex ? SpecificVertexQuery.toJSON(message.specificVertex) : undefined);
    message.vertexWithPropertyPresence !== undefined &&
      (obj.vertexWithPropertyPresence = message.vertexWithPropertyPresence
        ? VertexWithPropertyPresenceQuery.toJSON(message.vertexWithPropertyPresence)
        : undefined);
    message.vertexWithPropertyValue !== undefined && (obj.vertexWithPropertyValue = message.vertexWithPropertyValue
      ? VertexWithPropertyValueQuery.toJSON(message.vertexWithPropertyValue)
      : undefined);
    message.allEdge !== undefined && (obj.allEdge = message.allEdge ? Empty.toJSON(message.allEdge) : undefined);
    message.specificEdge !== undefined &&
      (obj.specificEdge = message.specificEdge ? SpecificEdgeQuery.toJSON(message.specificEdge) : undefined);
    message.edgeWithPropertyPresence !== undefined && (obj.edgeWithPropertyPresence = message.edgeWithPropertyPresence
      ? EdgeWithPropertyPresenceQuery.toJSON(message.edgeWithPropertyPresence)
      : undefined);
    message.edgeWithPropertyValue !== undefined && (obj.edgeWithPropertyValue = message.edgeWithPropertyValue
      ? EdgeWithPropertyValueQuery.toJSON(message.edgeWithPropertyValue)
      : undefined);
    message.pipe !== undefined && (obj.pipe = message.pipe ? PipeQuery.toJSON(message.pipe) : undefined);
    message.pipeProperty !== undefined &&
      (obj.pipeProperty = message.pipeProperty ? PipePropertyQuery.toJSON(message.pipeProperty) : undefined);
    message.pipeWithPropertyPresence !== undefined && (obj.pipeWithPropertyPresence = message.pipeWithPropertyPresence
      ? PipeWithPropertyPresenceQuery.toJSON(message.pipeWithPropertyPresence)
      : undefined);
    message.pipeWithPropertyValue !== undefined && (obj.pipeWithPropertyValue = message.pipeWithPropertyValue
      ? PipeWithPropertyValueQuery.toJSON(message.pipeWithPropertyValue)
      : undefined);
    message.include !== undefined && (obj.include = message.include ? IncludeQuery.toJSON(message.include) : undefined);
    message.count !== undefined && (obj.count = message.count ? CountQuery.toJSON(message.count) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Query>, I>>(base?: I): Query {
    return Query.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Query>, I>>(object: I): Query {
    const message = createBaseQuery();
    message.allVertex = (object.allVertex !== undefined && object.allVertex !== null)
      ? Empty.fromPartial(object.allVertex)
      : undefined;
    message.rangeVertex = (object.rangeVertex !== undefined && object.rangeVertex !== null)
      ? RangeVertexQuery.fromPartial(object.rangeVertex)
      : undefined;
    message.specificVertex = (object.specificVertex !== undefined && object.specificVertex !== null)
      ? SpecificVertexQuery.fromPartial(object.specificVertex)
      : undefined;
    message.vertexWithPropertyPresence =
      (object.vertexWithPropertyPresence !== undefined && object.vertexWithPropertyPresence !== null)
        ? VertexWithPropertyPresenceQuery.fromPartial(object.vertexWithPropertyPresence)
        : undefined;
    message.vertexWithPropertyValue =
      (object.vertexWithPropertyValue !== undefined && object.vertexWithPropertyValue !== null)
        ? VertexWithPropertyValueQuery.fromPartial(object.vertexWithPropertyValue)
        : undefined;
    message.allEdge = (object.allEdge !== undefined && object.allEdge !== null)
      ? Empty.fromPartial(object.allEdge)
      : undefined;
    message.specificEdge = (object.specificEdge !== undefined && object.specificEdge !== null)
      ? SpecificEdgeQuery.fromPartial(object.specificEdge)
      : undefined;
    message.edgeWithPropertyPresence =
      (object.edgeWithPropertyPresence !== undefined && object.edgeWithPropertyPresence !== null)
        ? EdgeWithPropertyPresenceQuery.fromPartial(object.edgeWithPropertyPresence)
        : undefined;
    message.edgeWithPropertyValue =
      (object.edgeWithPropertyValue !== undefined && object.edgeWithPropertyValue !== null)
        ? EdgeWithPropertyValueQuery.fromPartial(object.edgeWithPropertyValue)
        : undefined;
    message.pipe = (object.pipe !== undefined && object.pipe !== null) ? PipeQuery.fromPartial(object.pipe) : undefined;
    message.pipeProperty = (object.pipeProperty !== undefined && object.pipeProperty !== null)
      ? PipePropertyQuery.fromPartial(object.pipeProperty)
      : undefined;
    message.pipeWithPropertyPresence =
      (object.pipeWithPropertyPresence !== undefined && object.pipeWithPropertyPresence !== null)
        ? PipeWithPropertyPresenceQuery.fromPartial(object.pipeWithPropertyPresence)
        : undefined;
    message.pipeWithPropertyValue =
      (object.pipeWithPropertyValue !== undefined && object.pipeWithPropertyValue !== null)
        ? PipeWithPropertyValueQuery.fromPartial(object.pipeWithPropertyValue)
        : undefined;
    message.include = (object.include !== undefined && object.include !== null)
      ? IncludeQuery.fromPartial(object.include)
      : undefined;
    message.count = (object.count !== undefined && object.count !== null)
      ? CountQuery.fromPartial(object.count)
      : undefined;
    return message;
  },
};

function createBaseRangeVertexQuery(): RangeVertexQuery {
  return { limit: 0, t: undefined, startId: undefined };
}

export const RangeVertexQuery = {
  encode(message: RangeVertexQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint32(message.limit);
    }
    if (message.t !== undefined) {
      Identifier.encode(message.t, writer.uint32(18).fork()).ldelim();
    }
    if (message.startId !== undefined) {
      Uuid.encode(message.startId, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RangeVertexQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRangeVertexQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.t = Identifier.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.startId = Uuid.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RangeVertexQuery {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      t: isSet(object.t) ? Identifier.fromJSON(object.t) : undefined,
      startId: isSet(object.startId) ? Uuid.fromJSON(object.startId) : undefined,
    };
  },

  toJSON(message: RangeVertexQuery): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.t !== undefined && (obj.t = message.t ? Identifier.toJSON(message.t) : undefined);
    message.startId !== undefined && (obj.startId = message.startId ? Uuid.toJSON(message.startId) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<RangeVertexQuery>, I>>(base?: I): RangeVertexQuery {
    return RangeVertexQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RangeVertexQuery>, I>>(object: I): RangeVertexQuery {
    const message = createBaseRangeVertexQuery();
    message.limit = object.limit ?? 0;
    message.t = (object.t !== undefined && object.t !== null) ? Identifier.fromPartial(object.t) : undefined;
    message.startId = (object.startId !== undefined && object.startId !== null)
      ? Uuid.fromPartial(object.startId)
      : undefined;
    return message;
  },
};

function createBaseSpecificVertexQuery(): SpecificVertexQuery {
  return { ids: [] };
}

export const SpecificVertexQuery = {
  encode(message: SpecificVertexQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      Uuid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpecificVertexQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpecificVertexQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ids.push(Uuid.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SpecificVertexQuery {
    return { ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Uuid.fromJSON(e)) : [] };
  },

  toJSON(message: SpecificVertexQuery): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e ? Uuid.toJSON(e) : undefined);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SpecificVertexQuery>, I>>(base?: I): SpecificVertexQuery {
    return SpecificVertexQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SpecificVertexQuery>, I>>(object: I): SpecificVertexQuery {
    const message = createBaseSpecificVertexQuery();
    message.ids = object.ids?.map((e) => Uuid.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVertexWithPropertyPresenceQuery(): VertexWithPropertyPresenceQuery {
  return { name: undefined };
}

export const VertexWithPropertyPresenceQuery = {
  encode(message: VertexWithPropertyPresenceQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      Identifier.encode(message.name, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VertexWithPropertyPresenceQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVertexWithPropertyPresenceQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VertexWithPropertyPresenceQuery {
    return { name: isSet(object.name) ? Identifier.fromJSON(object.name) : undefined };
  },

  toJSON(message: VertexWithPropertyPresenceQuery): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name ? Identifier.toJSON(message.name) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<VertexWithPropertyPresenceQuery>, I>>(base?: I): VertexWithPropertyPresenceQuery {
    return VertexWithPropertyPresenceQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VertexWithPropertyPresenceQuery>, I>>(
    object: I,
  ): VertexWithPropertyPresenceQuery {
    const message = createBaseVertexWithPropertyPresenceQuery();
    message.name = (object.name !== undefined && object.name !== null)
      ? Identifier.fromPartial(object.name)
      : undefined;
    return message;
  },
};

function createBaseVertexWithPropertyValueQuery(): VertexWithPropertyValueQuery {
  return { name: undefined, value: undefined };
}

export const VertexWithPropertyValueQuery = {
  encode(message: VertexWithPropertyValueQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      Identifier.encode(message.name, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Json.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VertexWithPropertyValueQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVertexWithPropertyValueQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = Identifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Json.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VertexWithPropertyValueQuery {
    return {
      name: isSet(object.name) ? Identifier.fromJSON(object.name) : undefined,
      value: isSet(object.value) ? Json.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: VertexWithPropertyValueQuery): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name ? Identifier.toJSON(message.name) : undefined);
    message.value !== undefined && (obj.value = message.value ? Json.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<VertexWithPropertyValueQuery>, I>>(base?: I): VertexWithPropertyValueQuery {
    return VertexWithPropertyValueQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VertexWithPropertyValueQuery>, I>>(object: I): VertexWithPropertyValueQuery {
    const message = createBaseVertexWithPropertyValueQuery();
    message.name = (object.name !== undefined && object.name !== null)
      ? Identifier.fromPartial(object.name)
      : undefined;
    message.value = (object.value !== undefined && object.value !== null) ? Json.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseSpecificEdgeQuery(): SpecificEdgeQuery {
  return { edges: [] };
}

export const SpecificEdgeQuery = {
  encode(message: SpecificEdgeQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.edges) {
      Edge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpecificEdgeQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpecificEdgeQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.edges.push(Edge.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SpecificEdgeQuery {
    return { edges: Array.isArray(object?.edges) ? object.edges.map((e: any) => Edge.fromJSON(e)) : [] };
  },

  toJSON(message: SpecificEdgeQuery): unknown {
    const obj: any = {};
    if (message.edges) {
      obj.edges = message.edges.map((e) => e ? Edge.toJSON(e) : undefined);
    } else {
      obj.edges = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SpecificEdgeQuery>, I>>(base?: I): SpecificEdgeQuery {
    return SpecificEdgeQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SpecificEdgeQuery>, I>>(object: I): SpecificEdgeQuery {
    const message = createBaseSpecificEdgeQuery();
    message.edges = object.edges?.map((e) => Edge.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEdgeWithPropertyPresenceQuery(): EdgeWithPropertyPresenceQuery {
  return { name: undefined };
}

export const EdgeWithPropertyPresenceQuery = {
  encode(message: EdgeWithPropertyPresenceQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      Identifier.encode(message.name, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EdgeWithPropertyPresenceQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEdgeWithPropertyPresenceQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EdgeWithPropertyPresenceQuery {
    return { name: isSet(object.name) ? Identifier.fromJSON(object.name) : undefined };
  },

  toJSON(message: EdgeWithPropertyPresenceQuery): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name ? Identifier.toJSON(message.name) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EdgeWithPropertyPresenceQuery>, I>>(base?: I): EdgeWithPropertyPresenceQuery {
    return EdgeWithPropertyPresenceQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EdgeWithPropertyPresenceQuery>, I>>(
    object: I,
  ): EdgeWithPropertyPresenceQuery {
    const message = createBaseEdgeWithPropertyPresenceQuery();
    message.name = (object.name !== undefined && object.name !== null)
      ? Identifier.fromPartial(object.name)
      : undefined;
    return message;
  },
};

function createBaseEdgeWithPropertyValueQuery(): EdgeWithPropertyValueQuery {
  return { name: undefined, value: undefined };
}

export const EdgeWithPropertyValueQuery = {
  encode(message: EdgeWithPropertyValueQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      Identifier.encode(message.name, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Json.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EdgeWithPropertyValueQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEdgeWithPropertyValueQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = Identifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Json.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EdgeWithPropertyValueQuery {
    return {
      name: isSet(object.name) ? Identifier.fromJSON(object.name) : undefined,
      value: isSet(object.value) ? Json.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EdgeWithPropertyValueQuery): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name ? Identifier.toJSON(message.name) : undefined);
    message.value !== undefined && (obj.value = message.value ? Json.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EdgeWithPropertyValueQuery>, I>>(base?: I): EdgeWithPropertyValueQuery {
    return EdgeWithPropertyValueQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EdgeWithPropertyValueQuery>, I>>(object: I): EdgeWithPropertyValueQuery {
    const message = createBaseEdgeWithPropertyValueQuery();
    message.name = (object.name !== undefined && object.name !== null)
      ? Identifier.fromPartial(object.name)
      : undefined;
    message.value = (object.value !== undefined && object.value !== null) ? Json.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBasePipeQuery(): PipeQuery {
  return { inner: undefined, direction: 0, limit: 0, t: undefined };
}

export const PipeQuery = {
  encode(message: PipeQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inner !== undefined) {
      Query.encode(message.inner, writer.uint32(10).fork()).ldelim();
    }
    if (message.direction !== 0) {
      writer.uint32(16).int32(message.direction);
    }
    if (message.limit !== 0) {
      writer.uint32(24).uint32(message.limit);
    }
    if (message.t !== undefined) {
      Identifier.encode(message.t, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PipeQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePipeQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inner = Query.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.limit = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.t = Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PipeQuery {
    return {
      inner: isSet(object.inner) ? Query.fromJSON(object.inner) : undefined,
      direction: isSet(object.direction) ? edgeDirectionFromJSON(object.direction) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      t: isSet(object.t) ? Identifier.fromJSON(object.t) : undefined,
    };
  },

  toJSON(message: PipeQuery): unknown {
    const obj: any = {};
    message.inner !== undefined && (obj.inner = message.inner ? Query.toJSON(message.inner) : undefined);
    message.direction !== undefined && (obj.direction = edgeDirectionToJSON(message.direction));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.t !== undefined && (obj.t = message.t ? Identifier.toJSON(message.t) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PipeQuery>, I>>(base?: I): PipeQuery {
    return PipeQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PipeQuery>, I>>(object: I): PipeQuery {
    const message = createBasePipeQuery();
    message.inner = (object.inner !== undefined && object.inner !== null) ? Query.fromPartial(object.inner) : undefined;
    message.direction = object.direction ?? 0;
    message.limit = object.limit ?? 0;
    message.t = (object.t !== undefined && object.t !== null) ? Identifier.fromPartial(object.t) : undefined;
    return message;
  },
};

function createBasePipePropertyQuery(): PipePropertyQuery {
  return { inner: undefined, name: undefined };
}

export const PipePropertyQuery = {
  encode(message: PipePropertyQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inner !== undefined) {
      Query.encode(message.inner, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== undefined) {
      Identifier.encode(message.name, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PipePropertyQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePipePropertyQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inner = Query.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PipePropertyQuery {
    return {
      inner: isSet(object.inner) ? Query.fromJSON(object.inner) : undefined,
      name: isSet(object.name) ? Identifier.fromJSON(object.name) : undefined,
    };
  },

  toJSON(message: PipePropertyQuery): unknown {
    const obj: any = {};
    message.inner !== undefined && (obj.inner = message.inner ? Query.toJSON(message.inner) : undefined);
    message.name !== undefined && (obj.name = message.name ? Identifier.toJSON(message.name) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<PipePropertyQuery>, I>>(base?: I): PipePropertyQuery {
    return PipePropertyQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PipePropertyQuery>, I>>(object: I): PipePropertyQuery {
    const message = createBasePipePropertyQuery();
    message.inner = (object.inner !== undefined && object.inner !== null) ? Query.fromPartial(object.inner) : undefined;
    message.name = (object.name !== undefined && object.name !== null)
      ? Identifier.fromPartial(object.name)
      : undefined;
    return message;
  },
};

function createBasePipeWithPropertyPresenceQuery(): PipeWithPropertyPresenceQuery {
  return { inner: undefined, name: undefined, exists: false };
}

export const PipeWithPropertyPresenceQuery = {
  encode(message: PipeWithPropertyPresenceQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inner !== undefined) {
      Query.encode(message.inner, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== undefined) {
      Identifier.encode(message.name, writer.uint32(18).fork()).ldelim();
    }
    if (message.exists === true) {
      writer.uint32(24).bool(message.exists);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PipeWithPropertyPresenceQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePipeWithPropertyPresenceQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inner = Query.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = Identifier.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.exists = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PipeWithPropertyPresenceQuery {
    return {
      inner: isSet(object.inner) ? Query.fromJSON(object.inner) : undefined,
      name: isSet(object.name) ? Identifier.fromJSON(object.name) : undefined,
      exists: isSet(object.exists) ? Boolean(object.exists) : false,
    };
  },

  toJSON(message: PipeWithPropertyPresenceQuery): unknown {
    const obj: any = {};
    message.inner !== undefined && (obj.inner = message.inner ? Query.toJSON(message.inner) : undefined);
    message.name !== undefined && (obj.name = message.name ? Identifier.toJSON(message.name) : undefined);
    message.exists !== undefined && (obj.exists = message.exists);
    return obj;
  },

  create<I extends Exact<DeepPartial<PipeWithPropertyPresenceQuery>, I>>(base?: I): PipeWithPropertyPresenceQuery {
    return PipeWithPropertyPresenceQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PipeWithPropertyPresenceQuery>, I>>(
    object: I,
  ): PipeWithPropertyPresenceQuery {
    const message = createBasePipeWithPropertyPresenceQuery();
    message.inner = (object.inner !== undefined && object.inner !== null) ? Query.fromPartial(object.inner) : undefined;
    message.name = (object.name !== undefined && object.name !== null)
      ? Identifier.fromPartial(object.name)
      : undefined;
    message.exists = object.exists ?? false;
    return message;
  },
};

function createBasePipeWithPropertyValueQuery(): PipeWithPropertyValueQuery {
  return { inner: undefined, name: undefined, value: undefined, equal: false };
}

export const PipeWithPropertyValueQuery = {
  encode(message: PipeWithPropertyValueQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inner !== undefined) {
      Query.encode(message.inner, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== undefined) {
      Identifier.encode(message.name, writer.uint32(18).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Json.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    if (message.equal === true) {
      writer.uint32(32).bool(message.equal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PipeWithPropertyValueQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePipeWithPropertyValueQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inner = Query.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = Identifier.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = Json.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.equal = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PipeWithPropertyValueQuery {
    return {
      inner: isSet(object.inner) ? Query.fromJSON(object.inner) : undefined,
      name: isSet(object.name) ? Identifier.fromJSON(object.name) : undefined,
      value: isSet(object.value) ? Json.fromJSON(object.value) : undefined,
      equal: isSet(object.equal) ? Boolean(object.equal) : false,
    };
  },

  toJSON(message: PipeWithPropertyValueQuery): unknown {
    const obj: any = {};
    message.inner !== undefined && (obj.inner = message.inner ? Query.toJSON(message.inner) : undefined);
    message.name !== undefined && (obj.name = message.name ? Identifier.toJSON(message.name) : undefined);
    message.value !== undefined && (obj.value = message.value ? Json.toJSON(message.value) : undefined);
    message.equal !== undefined && (obj.equal = message.equal);
    return obj;
  },

  create<I extends Exact<DeepPartial<PipeWithPropertyValueQuery>, I>>(base?: I): PipeWithPropertyValueQuery {
    return PipeWithPropertyValueQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PipeWithPropertyValueQuery>, I>>(object: I): PipeWithPropertyValueQuery {
    const message = createBasePipeWithPropertyValueQuery();
    message.inner = (object.inner !== undefined && object.inner !== null) ? Query.fromPartial(object.inner) : undefined;
    message.name = (object.name !== undefined && object.name !== null)
      ? Identifier.fromPartial(object.name)
      : undefined;
    message.value = (object.value !== undefined && object.value !== null) ? Json.fromPartial(object.value) : undefined;
    message.equal = object.equal ?? false;
    return message;
  },
};

function createBaseIncludeQuery(): IncludeQuery {
  return { inner: undefined };
}

export const IncludeQuery = {
  encode(message: IncludeQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inner !== undefined) {
      Query.encode(message.inner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IncludeQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncludeQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inner = Query.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IncludeQuery {
    return { inner: isSet(object.inner) ? Query.fromJSON(object.inner) : undefined };
  },

  toJSON(message: IncludeQuery): unknown {
    const obj: any = {};
    message.inner !== undefined && (obj.inner = message.inner ? Query.toJSON(message.inner) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<IncludeQuery>, I>>(base?: I): IncludeQuery {
    return IncludeQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IncludeQuery>, I>>(object: I): IncludeQuery {
    const message = createBaseIncludeQuery();
    message.inner = (object.inner !== undefined && object.inner !== null) ? Query.fromPartial(object.inner) : undefined;
    return message;
  },
};

function createBaseCountQuery(): CountQuery {
  return { inner: undefined };
}

export const CountQuery = {
  encode(message: CountQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inner !== undefined) {
      Query.encode(message.inner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CountQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCountQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inner = Query.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CountQuery {
    return { inner: isSet(object.inner) ? Query.fromJSON(object.inner) : undefined };
  },

  toJSON(message: CountQuery): unknown {
    const obj: any = {};
    message.inner !== undefined && (obj.inner = message.inner ? Query.toJSON(message.inner) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<CountQuery>, I>>(base?: I): CountQuery {
    return CountQuery.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CountQuery>, I>>(object: I): CountQuery {
    const message = createBaseCountQuery();
    message.inner = (object.inner !== undefined && object.inner !== null) ? Query.fromPartial(object.inner) : undefined;
    return message;
  },
};

function createBaseQueryOutputValue(): QueryOutputValue {
  return {
    vertices: undefined,
    edges: undefined,
    count: undefined,
    vertexProperties: undefined,
    edgeProperties: undefined,
  };
}

export const QueryOutputValue = {
  encode(message: QueryOutputValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vertices !== undefined) {
      QueryOutputVertices.encode(message.vertices, writer.uint32(10).fork()).ldelim();
    }
    if (message.edges !== undefined) {
      QueryOutputEdges.encode(message.edges, writer.uint32(18).fork()).ldelim();
    }
    if (message.count !== undefined) {
      writer.uint32(24).uint64(message.count);
    }
    if (message.vertexProperties !== undefined) {
      QueryOutputVertexProperties.encode(message.vertexProperties, writer.uint32(34).fork()).ldelim();
    }
    if (message.edgeProperties !== undefined) {
      QueryOutputEdgeProperties.encode(message.edgeProperties, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutputValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutputValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vertices = QueryOutputVertices.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.edges = QueryOutputEdges.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.count = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.vertexProperties = QueryOutputVertexProperties.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.edgeProperties = QueryOutputEdgeProperties.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOutputValue {
    return {
      vertices: isSet(object.vertices) ? QueryOutputVertices.fromJSON(object.vertices) : undefined,
      edges: isSet(object.edges) ? QueryOutputEdges.fromJSON(object.edges) : undefined,
      count: isSet(object.count) ? Number(object.count) : undefined,
      vertexProperties: isSet(object.vertexProperties)
        ? QueryOutputVertexProperties.fromJSON(object.vertexProperties)
        : undefined,
      edgeProperties: isSet(object.edgeProperties)
        ? QueryOutputEdgeProperties.fromJSON(object.edgeProperties)
        : undefined,
    };
  },

  toJSON(message: QueryOutputValue): unknown {
    const obj: any = {};
    message.vertices !== undefined &&
      (obj.vertices = message.vertices ? QueryOutputVertices.toJSON(message.vertices) : undefined);
    message.edges !== undefined && (obj.edges = message.edges ? QueryOutputEdges.toJSON(message.edges) : undefined);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.vertexProperties !== undefined && (obj.vertexProperties = message.vertexProperties
      ? QueryOutputVertexProperties.toJSON(message.vertexProperties)
      : undefined);
    message.edgeProperties !== undefined && (obj.edgeProperties = message.edgeProperties
      ? QueryOutputEdgeProperties.toJSON(message.edgeProperties)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOutputValue>, I>>(base?: I): QueryOutputValue {
    return QueryOutputValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOutputValue>, I>>(object: I): QueryOutputValue {
    const message = createBaseQueryOutputValue();
    message.vertices = (object.vertices !== undefined && object.vertices !== null)
      ? QueryOutputVertices.fromPartial(object.vertices)
      : undefined;
    message.edges = (object.edges !== undefined && object.edges !== null)
      ? QueryOutputEdges.fromPartial(object.edges)
      : undefined;
    message.count = object.count ?? undefined;
    message.vertexProperties = (object.vertexProperties !== undefined && object.vertexProperties !== null)
      ? QueryOutputVertexProperties.fromPartial(object.vertexProperties)
      : undefined;
    message.edgeProperties = (object.edgeProperties !== undefined && object.edgeProperties !== null)
      ? QueryOutputEdgeProperties.fromPartial(object.edgeProperties)
      : undefined;
    return message;
  },
};

function createBaseQueryOutputVertices(): QueryOutputVertices {
  return { vertices: [] };
}

export const QueryOutputVertices = {
  encode(message: QueryOutputVertices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vertices) {
      Vertex.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutputVertices {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutputVertices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vertices.push(Vertex.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOutputVertices {
    return { vertices: Array.isArray(object?.vertices) ? object.vertices.map((e: any) => Vertex.fromJSON(e)) : [] };
  },

  toJSON(message: QueryOutputVertices): unknown {
    const obj: any = {};
    if (message.vertices) {
      obj.vertices = message.vertices.map((e) => e ? Vertex.toJSON(e) : undefined);
    } else {
      obj.vertices = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOutputVertices>, I>>(base?: I): QueryOutputVertices {
    return QueryOutputVertices.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOutputVertices>, I>>(object: I): QueryOutputVertices {
    const message = createBaseQueryOutputVertices();
    message.vertices = object.vertices?.map((e) => Vertex.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryOutputEdges(): QueryOutputEdges {
  return { edges: [] };
}

export const QueryOutputEdges = {
  encode(message: QueryOutputEdges, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.edges) {
      Edge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutputEdges {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutputEdges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.edges.push(Edge.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOutputEdges {
    return { edges: Array.isArray(object?.edges) ? object.edges.map((e: any) => Edge.fromJSON(e)) : [] };
  },

  toJSON(message: QueryOutputEdges): unknown {
    const obj: any = {};
    if (message.edges) {
      obj.edges = message.edges.map((e) => e ? Edge.toJSON(e) : undefined);
    } else {
      obj.edges = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOutputEdges>, I>>(base?: I): QueryOutputEdges {
    return QueryOutputEdges.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOutputEdges>, I>>(object: I): QueryOutputEdges {
    const message = createBaseQueryOutputEdges();
    message.edges = object.edges?.map((e) => Edge.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryOutputVertexProperties(): QueryOutputVertexProperties {
  return { vertexProperties: [] };
}

export const QueryOutputVertexProperties = {
  encode(message: QueryOutputVertexProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vertexProperties) {
      VertexProperties.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutputVertexProperties {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutputVertexProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vertexProperties.push(VertexProperties.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOutputVertexProperties {
    return {
      vertexProperties: Array.isArray(object?.vertexProperties)
        ? object.vertexProperties.map((e: any) => VertexProperties.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryOutputVertexProperties): unknown {
    const obj: any = {};
    if (message.vertexProperties) {
      obj.vertexProperties = message.vertexProperties.map((e) => e ? VertexProperties.toJSON(e) : undefined);
    } else {
      obj.vertexProperties = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOutputVertexProperties>, I>>(base?: I): QueryOutputVertexProperties {
    return QueryOutputVertexProperties.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOutputVertexProperties>, I>>(object: I): QueryOutputVertexProperties {
    const message = createBaseQueryOutputVertexProperties();
    message.vertexProperties = object.vertexProperties?.map((e) => VertexProperties.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryOutputEdgeProperties(): QueryOutputEdgeProperties {
  return { edgeProperties: [] };
}

export const QueryOutputEdgeProperties = {
  encode(message: QueryOutputEdgeProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.edgeProperties) {
      EdgeProperties.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutputEdgeProperties {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutputEdgeProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.edgeProperties.push(EdgeProperties.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOutputEdgeProperties {
    return {
      edgeProperties: Array.isArray(object?.edgeProperties)
        ? object.edgeProperties.map((e: any) => EdgeProperties.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryOutputEdgeProperties): unknown {
    const obj: any = {};
    if (message.edgeProperties) {
      obj.edgeProperties = message.edgeProperties.map((e) => e ? EdgeProperties.toJSON(e) : undefined);
    } else {
      obj.edgeProperties = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOutputEdgeProperties>, I>>(base?: I): QueryOutputEdgeProperties {
    return QueryOutputEdgeProperties.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOutputEdgeProperties>, I>>(object: I): QueryOutputEdgeProperties {
    const message = createBaseQueryOutputEdgeProperties();
    message.edgeProperties = object.edgeProperties?.map((e) => EdgeProperties.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNamedProperty(): NamedProperty {
  return { name: undefined, value: undefined };
}

export const NamedProperty = {
  encode(message: NamedProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      Identifier.encode(message.name, writer.uint32(26).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Json.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NamedProperty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamedProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = Identifier.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Json.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NamedProperty {
    return {
      name: isSet(object.name) ? Identifier.fromJSON(object.name) : undefined,
      value: isSet(object.value) ? Json.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: NamedProperty): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name ? Identifier.toJSON(message.name) : undefined);
    message.value !== undefined && (obj.value = message.value ? Json.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NamedProperty>, I>>(base?: I): NamedProperty {
    return NamedProperty.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NamedProperty>, I>>(object: I): NamedProperty {
    const message = createBaseNamedProperty();
    message.name = (object.name !== undefined && object.name !== null)
      ? Identifier.fromPartial(object.name)
      : undefined;
    message.value = (object.value !== undefined && object.value !== null) ? Json.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseVertexProperty(): VertexProperty {
  return { id: undefined, value: undefined };
}

export const VertexProperty = {
  encode(message: VertexProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      Uuid.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Json.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VertexProperty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVertexProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = Uuid.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Json.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VertexProperty {
    return {
      id: isSet(object.id) ? Uuid.fromJSON(object.id) : undefined,
      value: isSet(object.value) ? Json.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: VertexProperty): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? Uuid.toJSON(message.id) : undefined);
    message.value !== undefined && (obj.value = message.value ? Json.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<VertexProperty>, I>>(base?: I): VertexProperty {
    return VertexProperty.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VertexProperty>, I>>(object: I): VertexProperty {
    const message = createBaseVertexProperty();
    message.id = (object.id !== undefined && object.id !== null) ? Uuid.fromPartial(object.id) : undefined;
    message.value = (object.value !== undefined && object.value !== null) ? Json.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseVertexProperties(): VertexProperties {
  return { vertex: undefined, props: [] };
}

export const VertexProperties = {
  encode(message: VertexProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vertex !== undefined) {
      Vertex.encode(message.vertex, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.props) {
      NamedProperty.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VertexProperties {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVertexProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vertex = Vertex.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.props.push(NamedProperty.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VertexProperties {
    return {
      vertex: isSet(object.vertex) ? Vertex.fromJSON(object.vertex) : undefined,
      props: Array.isArray(object?.props) ? object.props.map((e: any) => NamedProperty.fromJSON(e)) : [],
    };
  },

  toJSON(message: VertexProperties): unknown {
    const obj: any = {};
    message.vertex !== undefined && (obj.vertex = message.vertex ? Vertex.toJSON(message.vertex) : undefined);
    if (message.props) {
      obj.props = message.props.map((e) => e ? NamedProperty.toJSON(e) : undefined);
    } else {
      obj.props = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VertexProperties>, I>>(base?: I): VertexProperties {
    return VertexProperties.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VertexProperties>, I>>(object: I): VertexProperties {
    const message = createBaseVertexProperties();
    message.vertex = (object.vertex !== undefined && object.vertex !== null)
      ? Vertex.fromPartial(object.vertex)
      : undefined;
    message.props = object.props?.map((e) => NamedProperty.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEdgeProperty(): EdgeProperty {
  return { edge: undefined, value: undefined };
}

export const EdgeProperty = {
  encode(message: EdgeProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.edge !== undefined) {
      Edge.encode(message.edge, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Json.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EdgeProperty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEdgeProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.edge = Edge.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Json.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EdgeProperty {
    return {
      edge: isSet(object.edge) ? Edge.fromJSON(object.edge) : undefined,
      value: isSet(object.value) ? Json.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EdgeProperty): unknown {
    const obj: any = {};
    message.edge !== undefined && (obj.edge = message.edge ? Edge.toJSON(message.edge) : undefined);
    message.value !== undefined && (obj.value = message.value ? Json.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EdgeProperty>, I>>(base?: I): EdgeProperty {
    return EdgeProperty.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EdgeProperty>, I>>(object: I): EdgeProperty {
    const message = createBaseEdgeProperty();
    message.edge = (object.edge !== undefined && object.edge !== null) ? Edge.fromPartial(object.edge) : undefined;
    message.value = (object.value !== undefined && object.value !== null) ? Json.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseEdgeProperties(): EdgeProperties {
  return { edge: undefined, props: [] };
}

export const EdgeProperties = {
  encode(message: EdgeProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.edge !== undefined) {
      Edge.encode(message.edge, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.props) {
      NamedProperty.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EdgeProperties {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEdgeProperties();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.edge = Edge.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.props.push(NamedProperty.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EdgeProperties {
    return {
      edge: isSet(object.edge) ? Edge.fromJSON(object.edge) : undefined,
      props: Array.isArray(object?.props) ? object.props.map((e: any) => NamedProperty.fromJSON(e)) : [],
    };
  },

  toJSON(message: EdgeProperties): unknown {
    const obj: any = {};
    message.edge !== undefined && (obj.edge = message.edge ? Edge.toJSON(message.edge) : undefined);
    if (message.props) {
      obj.props = message.props.map((e) => e ? NamedProperty.toJSON(e) : undefined);
    } else {
      obj.props = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EdgeProperties>, I>>(base?: I): EdgeProperties {
    return EdgeProperties.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EdgeProperties>, I>>(object: I): EdgeProperties {
    const message = createBaseEdgeProperties();
    message.edge = (object.edge !== undefined && object.edge !== null) ? Edge.fromPartial(object.edge) : undefined;
    message.props = object.props?.map((e) => NamedProperty.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBulkInsertItem(): BulkInsertItem {
  return { vertex: undefined, edge: undefined, vertexProperty: undefined, edgeProperty: undefined };
}

export const BulkInsertItem = {
  encode(message: BulkInsertItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vertex !== undefined) {
      Vertex.encode(message.vertex, writer.uint32(10).fork()).ldelim();
    }
    if (message.edge !== undefined) {
      Edge.encode(message.edge, writer.uint32(18).fork()).ldelim();
    }
    if (message.vertexProperty !== undefined) {
      VertexPropertyBulkInsertItem.encode(message.vertexProperty, writer.uint32(26).fork()).ldelim();
    }
    if (message.edgeProperty !== undefined) {
      EdgePropertyBulkInsertItem.encode(message.edgeProperty, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BulkInsertItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBulkInsertItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vertex = Vertex.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.edge = Edge.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.vertexProperty = VertexPropertyBulkInsertItem.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.edgeProperty = EdgePropertyBulkInsertItem.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BulkInsertItem {
    return {
      vertex: isSet(object.vertex) ? Vertex.fromJSON(object.vertex) : undefined,
      edge: isSet(object.edge) ? Edge.fromJSON(object.edge) : undefined,
      vertexProperty: isSet(object.vertexProperty)
        ? VertexPropertyBulkInsertItem.fromJSON(object.vertexProperty)
        : undefined,
      edgeProperty: isSet(object.edgeProperty) ? EdgePropertyBulkInsertItem.fromJSON(object.edgeProperty) : undefined,
    };
  },

  toJSON(message: BulkInsertItem): unknown {
    const obj: any = {};
    message.vertex !== undefined && (obj.vertex = message.vertex ? Vertex.toJSON(message.vertex) : undefined);
    message.edge !== undefined && (obj.edge = message.edge ? Edge.toJSON(message.edge) : undefined);
    message.vertexProperty !== undefined && (obj.vertexProperty = message.vertexProperty
      ? VertexPropertyBulkInsertItem.toJSON(message.vertexProperty)
      : undefined);
    message.edgeProperty !== undefined &&
      (obj.edgeProperty = message.edgeProperty ? EdgePropertyBulkInsertItem.toJSON(message.edgeProperty) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<BulkInsertItem>, I>>(base?: I): BulkInsertItem {
    return BulkInsertItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BulkInsertItem>, I>>(object: I): BulkInsertItem {
    const message = createBaseBulkInsertItem();
    message.vertex = (object.vertex !== undefined && object.vertex !== null)
      ? Vertex.fromPartial(object.vertex)
      : undefined;
    message.edge = (object.edge !== undefined && object.edge !== null) ? Edge.fromPartial(object.edge) : undefined;
    message.vertexProperty = (object.vertexProperty !== undefined && object.vertexProperty !== null)
      ? VertexPropertyBulkInsertItem.fromPartial(object.vertexProperty)
      : undefined;
    message.edgeProperty = (object.edgeProperty !== undefined && object.edgeProperty !== null)
      ? EdgePropertyBulkInsertItem.fromPartial(object.edgeProperty)
      : undefined;
    return message;
  },
};

function createBaseVertexPropertyBulkInsertItem(): VertexPropertyBulkInsertItem {
  return { id: undefined, name: undefined, value: undefined };
}

export const VertexPropertyBulkInsertItem = {
  encode(message: VertexPropertyBulkInsertItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      Uuid.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== undefined) {
      Identifier.encode(message.name, writer.uint32(34).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Json.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VertexPropertyBulkInsertItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVertexPropertyBulkInsertItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = Uuid.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = Identifier.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = Json.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VertexPropertyBulkInsertItem {
    return {
      id: isSet(object.id) ? Uuid.fromJSON(object.id) : undefined,
      name: isSet(object.name) ? Identifier.fromJSON(object.name) : undefined,
      value: isSet(object.value) ? Json.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: VertexPropertyBulkInsertItem): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? Uuid.toJSON(message.id) : undefined);
    message.name !== undefined && (obj.name = message.name ? Identifier.toJSON(message.name) : undefined);
    message.value !== undefined && (obj.value = message.value ? Json.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<VertexPropertyBulkInsertItem>, I>>(base?: I): VertexPropertyBulkInsertItem {
    return VertexPropertyBulkInsertItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VertexPropertyBulkInsertItem>, I>>(object: I): VertexPropertyBulkInsertItem {
    const message = createBaseVertexPropertyBulkInsertItem();
    message.id = (object.id !== undefined && object.id !== null) ? Uuid.fromPartial(object.id) : undefined;
    message.name = (object.name !== undefined && object.name !== null)
      ? Identifier.fromPartial(object.name)
      : undefined;
    message.value = (object.value !== undefined && object.value !== null) ? Json.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseEdgePropertyBulkInsertItem(): EdgePropertyBulkInsertItem {
  return { edge: undefined, name: undefined, value: undefined };
}

export const EdgePropertyBulkInsertItem = {
  encode(message: EdgePropertyBulkInsertItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.edge !== undefined) {
      Edge.encode(message.edge, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== undefined) {
      Identifier.encode(message.name, writer.uint32(34).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Json.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EdgePropertyBulkInsertItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEdgePropertyBulkInsertItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.edge = Edge.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = Identifier.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = Json.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EdgePropertyBulkInsertItem {
    return {
      edge: isSet(object.edge) ? Edge.fromJSON(object.edge) : undefined,
      name: isSet(object.name) ? Identifier.fromJSON(object.name) : undefined,
      value: isSet(object.value) ? Json.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EdgePropertyBulkInsertItem): unknown {
    const obj: any = {};
    message.edge !== undefined && (obj.edge = message.edge ? Edge.toJSON(message.edge) : undefined);
    message.name !== undefined && (obj.name = message.name ? Identifier.toJSON(message.name) : undefined);
    message.value !== undefined && (obj.value = message.value ? Json.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<EdgePropertyBulkInsertItem>, I>>(base?: I): EdgePropertyBulkInsertItem {
    return EdgePropertyBulkInsertItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EdgePropertyBulkInsertItem>, I>>(object: I): EdgePropertyBulkInsertItem {
    const message = createBaseEdgePropertyBulkInsertItem();
    message.edge = (object.edge !== undefined && object.edge !== null) ? Edge.fromPartial(object.edge) : undefined;
    message.name = (object.name !== undefined && object.name !== null)
      ? Identifier.fromPartial(object.name)
      : undefined;
    message.value = (object.value !== undefined && object.value !== null) ? Json.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseIndexPropertyRequest(): IndexPropertyRequest {
  return { name: undefined };
}

export const IndexPropertyRequest = {
  encode(message: IndexPropertyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      Identifier.encode(message.name, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexPropertyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexPropertyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = Identifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexPropertyRequest {
    return { name: isSet(object.name) ? Identifier.fromJSON(object.name) : undefined };
  },

  toJSON(message: IndexPropertyRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name ? Identifier.toJSON(message.name) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexPropertyRequest>, I>>(base?: I): IndexPropertyRequest {
    return IndexPropertyRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IndexPropertyRequest>, I>>(object: I): IndexPropertyRequest {
    const message = createBaseIndexPropertyRequest();
    message.name = (object.name !== undefined && object.name !== null)
      ? Identifier.fromPartial(object.name)
      : undefined;
    return message;
  },
};

function createBaseSetPropertiesRequest(): SetPropertiesRequest {
  return { q: undefined, name: undefined, value: undefined };
}

export const SetPropertiesRequest = {
  encode(message: SetPropertiesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.q !== undefined) {
      Query.encode(message.q, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== undefined) {
      Identifier.encode(message.name, writer.uint32(18).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Json.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetPropertiesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPropertiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.q = Query.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = Identifier.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = Json.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetPropertiesRequest {
    return {
      q: isSet(object.q) ? Query.fromJSON(object.q) : undefined,
      name: isSet(object.name) ? Identifier.fromJSON(object.name) : undefined,
      value: isSet(object.value) ? Json.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SetPropertiesRequest): unknown {
    const obj: any = {};
    message.q !== undefined && (obj.q = message.q ? Query.toJSON(message.q) : undefined);
    message.name !== undefined && (obj.name = message.name ? Identifier.toJSON(message.name) : undefined);
    message.value !== undefined && (obj.value = message.value ? Json.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SetPropertiesRequest>, I>>(base?: I): SetPropertiesRequest {
    return SetPropertiesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetPropertiesRequest>, I>>(object: I): SetPropertiesRequest {
    const message = createBaseSetPropertiesRequest();
    message.q = (object.q !== undefined && object.q !== null) ? Query.fromPartial(object.q) : undefined;
    message.name = (object.name !== undefined && object.name !== null)
      ? Identifier.fromPartial(object.name)
      : undefined;
    message.value = (object.value !== undefined && object.value !== null) ? Json.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseCreateResponse(): CreateResponse {
  return { created: false };
}

export const CreateResponse = {
  encode(message: CreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.created === true) {
      writer.uint32(8).bool(message.created);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.created = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateResponse {
    return { created: isSet(object.created) ? Boolean(object.created) : false };
  },

  toJSON(message: CreateResponse): unknown {
    const obj: any = {};
    message.created !== undefined && (obj.created = message.created);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateResponse>, I>>(base?: I): CreateResponse {
    return CreateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateResponse>, I>>(object: I): CreateResponse {
    const message = createBaseCreateResponse();
    message.created = object.created ?? false;
    return message;
  },
};

function createBaseExecutePluginRequest(): ExecutePluginRequest {
  return { name: "", arg: undefined };
}

export const ExecutePluginRequest = {
  encode(message: ExecutePluginRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.arg !== undefined) {
      Json.encode(message.arg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePluginRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePluginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.arg = Json.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecutePluginRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      arg: isSet(object.arg) ? Json.fromJSON(object.arg) : undefined,
    };
  },

  toJSON(message: ExecutePluginRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.arg !== undefined && (obj.arg = message.arg ? Json.toJSON(message.arg) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutePluginRequest>, I>>(base?: I): ExecutePluginRequest {
    return ExecutePluginRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExecutePluginRequest>, I>>(object: I): ExecutePluginRequest {
    const message = createBaseExecutePluginRequest();
    message.name = object.name ?? "";
    message.arg = (object.arg !== undefined && object.arg !== null) ? Json.fromPartial(object.arg) : undefined;
    return message;
  },
};

function createBaseExecutePluginResponse(): ExecutePluginResponse {
  return { value: undefined };
}

export const ExecutePluginResponse = {
  encode(message: ExecutePluginResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Json.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutePluginResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecutePluginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = Json.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExecutePluginResponse {
    return { value: isSet(object.value) ? Json.fromJSON(object.value) : undefined };
  },

  toJSON(message: ExecutePluginResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Json.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutePluginResponse>, I>>(base?: I): ExecutePluginResponse {
    return ExecutePluginResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExecutePluginResponse>, I>>(object: I): ExecutePluginResponse {
    const message = createBaseExecutePluginResponse();
    message.value = (object.value !== undefined && object.value !== null) ? Json.fromPartial(object.value) : undefined;
    return message;
  },
};

export interface IndraDB {
  /** Pings the server. */
  Ping(request: Empty): Promise<Empty>;
  /**
   * Syncs persisted content. Depending on the datastore implementation,
   * this has different meanings - including potentially being a no-op.
   */
  Sync(request: Empty): Promise<Empty>;
  /** Creates a new vertex. */
  CreateVertex(request: Vertex): Promise<CreateResponse>;
  /**
   * Creates a new vertex with just a type specification. As opposed to
   * `CreateVertex`, this is used when you do not want to manually specify
   * the vertex's UUID. Returns the new vertex's UUID.
   */
  CreateVertexFromType(request: Identifier): Promise<Uuid>;
  /** Creates a new edge. */
  CreateEdge(request: Edge): Promise<CreateResponse>;
  /** Gets values specified by a query. */
  Get(request: Query): Observable<QueryOutputValue>;
  /** Deletes values specified by a query. */
  Delete(request: Query): Promise<Empty>;
  /** Sets properties. */
  SetProperties(request: SetPropertiesRequest): Promise<Empty>;
  /**
   * Bulk inserts many vertices, edges, and/or properties.
   *
   * Note that datastores have discretion on how to approach safeguard vs
   * performance tradeoffs. In particular:
   * * If the datastore is disk-backed, it may or may not flush before
   *   returning.
   * * The datastore might not verify for correctness; e.g., it might not
   *   ensure that the relevant vertices exist before inserting an edge.
   */
  BulkInsert(request: Observable<BulkInsertItem>): Promise<Empty>;
  /**
   * Enables indexing on a specified property. When indexing is enabled on a
   * property, it's possible to query on its presence and values.
   */
  IndexProperty(request: IndexPropertyRequest): Promise<Empty>;
  /** Executes a plugin and returns back the response from the plugin. */
  ExecutePlugin(request: ExecutePluginRequest): Promise<ExecutePluginResponse>;
}

export class IndraDBClientImpl implements IndraDB {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "indradb.IndraDB";
    this.rpc = rpc;
    this.Ping = this.Ping.bind(this);
    this.Sync = this.Sync.bind(this);
    this.CreateVertex = this.CreateVertex.bind(this);
    this.CreateVertexFromType = this.CreateVertexFromType.bind(this);
    this.CreateEdge = this.CreateEdge.bind(this);
    this.Get = this.Get.bind(this);
    this.Delete = this.Delete.bind(this);
    this.SetProperties = this.SetProperties.bind(this);
    this.BulkInsert = this.BulkInsert.bind(this);
    this.IndexProperty = this.IndexProperty.bind(this);
    this.ExecutePlugin = this.ExecutePlugin.bind(this);
  }
  Ping(request: Empty): Promise<Empty> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, "Ping", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  Sync(request: Empty): Promise<Empty> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request(this.service, "Sync", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  CreateVertex(request: Vertex): Promise<CreateResponse> {
    const data = Vertex.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateVertex", data);
    return promise.then((data) => CreateResponse.decode(_m0.Reader.create(data)));
  }

  CreateVertexFromType(request: Identifier): Promise<Uuid> {
    const data = Identifier.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateVertexFromType", data);
    return promise.then((data) => Uuid.decode(_m0.Reader.create(data)));
  }

  CreateEdge(request: Edge): Promise<CreateResponse> {
    const data = Edge.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateEdge", data);
    return promise.then((data) => CreateResponse.decode(_m0.Reader.create(data)));
  }

  Get(request: Query): Observable<QueryOutputValue> {
    const data = Query.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "Get", data);
    return result.pipe(map((data) => QueryOutputValue.decode(_m0.Reader.create(data))));
  }

  Delete(request: Query): Promise<Empty> {
    const data = Query.encode(request).finish();
    const promise = this.rpc.request(this.service, "Delete", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  SetProperties(request: SetPropertiesRequest): Promise<Empty> {
    const data = SetPropertiesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetProperties", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  BulkInsert(request: Observable<BulkInsertItem>): Promise<Empty> {
    const data = request.pipe(map((request) => BulkInsertItem.encode(request).finish()));
    const promise = this.rpc.clientStreamingRequest(this.service, "BulkInsert", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  IndexProperty(request: IndexPropertyRequest): Promise<Empty> {
    const data = IndexPropertyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IndexProperty", data);
    return promise.then((data) => Empty.decode(_m0.Reader.create(data)));
  }

  ExecutePlugin(request: ExecutePluginRequest): Promise<ExecutePluginResponse> {
    const data = ExecutePluginRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExecutePlugin", data);
    return promise.then((data) => ExecutePluginResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
