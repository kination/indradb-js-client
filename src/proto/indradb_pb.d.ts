// package: indradb
// file: indradb.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Uuid extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uuid.AsObject;
  static toObject(includeInstance: boolean, msg: Uuid): Uuid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Uuid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uuid;
  static deserializeBinaryFromReader(message: Uuid, reader: jspb.BinaryReader): Uuid;
}

export namespace Uuid {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class Identifier extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identifier.AsObject;
  static toObject(includeInstance: boolean, msg: Identifier): Identifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Identifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identifier;
  static deserializeBinaryFromReader(message: Identifier, reader: jspb.BinaryReader): Identifier;
}

export namespace Identifier {
  export type AsObject = {
    value: string,
  }
}

export class Json extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Json.AsObject;
  static toObject(includeInstance: boolean, msg: Json): Json.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Json, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Json;
  static deserializeBinaryFromReader(message: Json, reader: jspb.BinaryReader): Json;
}

export namespace Json {
  export type AsObject = {
    value: string,
  }
}

export class Edge extends jspb.Message {
  hasOutboundId(): boolean;
  clearOutboundId(): void;
  getOutboundId(): Uuid | undefined;
  setOutboundId(value?: Uuid): void;

  hasT(): boolean;
  clearT(): void;
  getT(): Identifier | undefined;
  setT(value?: Identifier): void;

  hasInboundId(): boolean;
  clearInboundId(): void;
  getInboundId(): Uuid | undefined;
  setInboundId(value?: Uuid): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Edge.AsObject;
  static toObject(includeInstance: boolean, msg: Edge): Edge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Edge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Edge;
  static deserializeBinaryFromReader(message: Edge, reader: jspb.BinaryReader): Edge;
}

export namespace Edge {
  export type AsObject = {
    outboundId?: Uuid.AsObject,
    t?: Identifier.AsObject,
    inboundId?: Uuid.AsObject,
  }
}

export class Vertex extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): Uuid | undefined;
  setId(value?: Uuid): void;

  hasT(): boolean;
  clearT(): void;
  getT(): Identifier | undefined;
  setT(value?: Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vertex.AsObject;
  static toObject(includeInstance: boolean, msg: Vertex): Vertex.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vertex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vertex;
  static deserializeBinaryFromReader(message: Vertex, reader: jspb.BinaryReader): Vertex;
}

export namespace Vertex {
  export type AsObject = {
    id?: Uuid.AsObject,
    t?: Identifier.AsObject,
  }
}

export class Query extends jspb.Message {
  hasAllVertex(): boolean;
  clearAllVertex(): void;
  getAllVertex(): google_protobuf_empty_pb.Empty | undefined;
  setAllVertex(value?: google_protobuf_empty_pb.Empty): void;

  hasRangeVertex(): boolean;
  clearRangeVertex(): void;
  getRangeVertex(): RangeVertexQuery | undefined;
  setRangeVertex(value?: RangeVertexQuery): void;

  hasSpecificVertex(): boolean;
  clearSpecificVertex(): void;
  getSpecificVertex(): SpecificVertexQuery | undefined;
  setSpecificVertex(value?: SpecificVertexQuery): void;

  hasVertexWithPropertyPresence(): boolean;
  clearVertexWithPropertyPresence(): void;
  getVertexWithPropertyPresence(): VertexWithPropertyPresenceQuery | undefined;
  setVertexWithPropertyPresence(value?: VertexWithPropertyPresenceQuery): void;

  hasVertexWithPropertyValue(): boolean;
  clearVertexWithPropertyValue(): void;
  getVertexWithPropertyValue(): VertexWithPropertyValueQuery | undefined;
  setVertexWithPropertyValue(value?: VertexWithPropertyValueQuery): void;

  hasAllEdge(): boolean;
  clearAllEdge(): void;
  getAllEdge(): google_protobuf_empty_pb.Empty | undefined;
  setAllEdge(value?: google_protobuf_empty_pb.Empty): void;

  hasSpecificEdge(): boolean;
  clearSpecificEdge(): void;
  getSpecificEdge(): SpecificEdgeQuery | undefined;
  setSpecificEdge(value?: SpecificEdgeQuery): void;

  hasEdgeWithPropertyPresence(): boolean;
  clearEdgeWithPropertyPresence(): void;
  getEdgeWithPropertyPresence(): EdgeWithPropertyPresenceQuery | undefined;
  setEdgeWithPropertyPresence(value?: EdgeWithPropertyPresenceQuery): void;

  hasEdgeWithPropertyValue(): boolean;
  clearEdgeWithPropertyValue(): void;
  getEdgeWithPropertyValue(): EdgeWithPropertyValueQuery | undefined;
  setEdgeWithPropertyValue(value?: EdgeWithPropertyValueQuery): void;

  hasPipe(): boolean;
  clearPipe(): void;
  getPipe(): PipeQuery | undefined;
  setPipe(value?: PipeQuery): void;

  hasPipeProperty(): boolean;
  clearPipeProperty(): void;
  getPipeProperty(): PipePropertyQuery | undefined;
  setPipeProperty(value?: PipePropertyQuery): void;

  hasPipeWithPropertyPresence(): boolean;
  clearPipeWithPropertyPresence(): void;
  getPipeWithPropertyPresence(): PipeWithPropertyPresenceQuery | undefined;
  setPipeWithPropertyPresence(value?: PipeWithPropertyPresenceQuery): void;

  hasPipeWithPropertyValue(): boolean;
  clearPipeWithPropertyValue(): void;
  getPipeWithPropertyValue(): PipeWithPropertyValueQuery | undefined;
  setPipeWithPropertyValue(value?: PipeWithPropertyValueQuery): void;

  hasInclude(): boolean;
  clearInclude(): void;
  getInclude(): IncludeQuery | undefined;
  setInclude(value?: IncludeQuery): void;

  hasCount(): boolean;
  clearCount(): void;
  getCount(): CountQuery | undefined;
  setCount(value?: CountQuery): void;

  getQueryCase(): Query.QueryCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Query.AsObject;
  static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Query;
  static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
}

export namespace Query {
  export type AsObject = {
    allVertex?: google_protobuf_empty_pb.Empty.AsObject,
    rangeVertex?: RangeVertexQuery.AsObject,
    specificVertex?: SpecificVertexQuery.AsObject,
    vertexWithPropertyPresence?: VertexWithPropertyPresenceQuery.AsObject,
    vertexWithPropertyValue?: VertexWithPropertyValueQuery.AsObject,
    allEdge?: google_protobuf_empty_pb.Empty.AsObject,
    specificEdge?: SpecificEdgeQuery.AsObject,
    edgeWithPropertyPresence?: EdgeWithPropertyPresenceQuery.AsObject,
    edgeWithPropertyValue?: EdgeWithPropertyValueQuery.AsObject,
    pipe?: PipeQuery.AsObject,
    pipeProperty?: PipePropertyQuery.AsObject,
    pipeWithPropertyPresence?: PipeWithPropertyPresenceQuery.AsObject,
    pipeWithPropertyValue?: PipeWithPropertyValueQuery.AsObject,
    include?: IncludeQuery.AsObject,
    count?: CountQuery.AsObject,
  }

  export enum QueryCase {
    QUERY_NOT_SET = 0,
    ALL_VERTEX = 1,
    RANGE_VERTEX = 2,
    SPECIFIC_VERTEX = 3,
    VERTEX_WITH_PROPERTY_PRESENCE = 4,
    VERTEX_WITH_PROPERTY_VALUE = 5,
    ALL_EDGE = 6,
    SPECIFIC_EDGE = 7,
    EDGE_WITH_PROPERTY_PRESENCE = 8,
    EDGE_WITH_PROPERTY_VALUE = 9,
    PIPE = 10,
    PIPE_PROPERTY = 11,
    PIPE_WITH_PROPERTY_PRESENCE = 12,
    PIPE_WITH_PROPERTY_VALUE = 13,
    INCLUDE = 14,
    COUNT = 15,
  }
}

export class RangeVertexQuery extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  hasT(): boolean;
  clearT(): void;
  getT(): Identifier | undefined;
  setT(value?: Identifier): void;

  hasStartId(): boolean;
  clearStartId(): void;
  getStartId(): Uuid | undefined;
  setStartId(value?: Uuid): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RangeVertexQuery.AsObject;
  static toObject(includeInstance: boolean, msg: RangeVertexQuery): RangeVertexQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RangeVertexQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RangeVertexQuery;
  static deserializeBinaryFromReader(message: RangeVertexQuery, reader: jspb.BinaryReader): RangeVertexQuery;
}

export namespace RangeVertexQuery {
  export type AsObject = {
    limit: number,
    t?: Identifier.AsObject,
    startId?: Uuid.AsObject,
  }
}

export class SpecificVertexQuery extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<Uuid>;
  setIdsList(value: Array<Uuid>): void;
  addIds(value?: Uuid, index?: number): Uuid;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecificVertexQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SpecificVertexQuery): SpecificVertexQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecificVertexQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecificVertexQuery;
  static deserializeBinaryFromReader(message: SpecificVertexQuery, reader: jspb.BinaryReader): SpecificVertexQuery;
}

export namespace SpecificVertexQuery {
  export type AsObject = {
    idsList: Array<Uuid.AsObject>,
  }
}

export class VertexWithPropertyPresenceQuery extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): Identifier | undefined;
  setName(value?: Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VertexWithPropertyPresenceQuery.AsObject;
  static toObject(includeInstance: boolean, msg: VertexWithPropertyPresenceQuery): VertexWithPropertyPresenceQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VertexWithPropertyPresenceQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VertexWithPropertyPresenceQuery;
  static deserializeBinaryFromReader(message: VertexWithPropertyPresenceQuery, reader: jspb.BinaryReader): VertexWithPropertyPresenceQuery;
}

export namespace VertexWithPropertyPresenceQuery {
  export type AsObject = {
    name?: Identifier.AsObject,
  }
}

export class VertexWithPropertyValueQuery extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): Identifier | undefined;
  setName(value?: Identifier): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Json | undefined;
  setValue(value?: Json): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VertexWithPropertyValueQuery.AsObject;
  static toObject(includeInstance: boolean, msg: VertexWithPropertyValueQuery): VertexWithPropertyValueQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VertexWithPropertyValueQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VertexWithPropertyValueQuery;
  static deserializeBinaryFromReader(message: VertexWithPropertyValueQuery, reader: jspb.BinaryReader): VertexWithPropertyValueQuery;
}

export namespace VertexWithPropertyValueQuery {
  export type AsObject = {
    name?: Identifier.AsObject,
    value?: Json.AsObject,
  }
}

export class SpecificEdgeQuery extends jspb.Message {
  clearEdgesList(): void;
  getEdgesList(): Array<Edge>;
  setEdgesList(value: Array<Edge>): void;
  addEdges(value?: Edge, index?: number): Edge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecificEdgeQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SpecificEdgeQuery): SpecificEdgeQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecificEdgeQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecificEdgeQuery;
  static deserializeBinaryFromReader(message: SpecificEdgeQuery, reader: jspb.BinaryReader): SpecificEdgeQuery;
}

export namespace SpecificEdgeQuery {
  export type AsObject = {
    edgesList: Array<Edge.AsObject>,
  }
}

export class EdgeWithPropertyPresenceQuery extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): Identifier | undefined;
  setName(value?: Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EdgeWithPropertyPresenceQuery.AsObject;
  static toObject(includeInstance: boolean, msg: EdgeWithPropertyPresenceQuery): EdgeWithPropertyPresenceQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EdgeWithPropertyPresenceQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EdgeWithPropertyPresenceQuery;
  static deserializeBinaryFromReader(message: EdgeWithPropertyPresenceQuery, reader: jspb.BinaryReader): EdgeWithPropertyPresenceQuery;
}

export namespace EdgeWithPropertyPresenceQuery {
  export type AsObject = {
    name?: Identifier.AsObject,
  }
}

export class EdgeWithPropertyValueQuery extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): Identifier | undefined;
  setName(value?: Identifier): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Json | undefined;
  setValue(value?: Json): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EdgeWithPropertyValueQuery.AsObject;
  static toObject(includeInstance: boolean, msg: EdgeWithPropertyValueQuery): EdgeWithPropertyValueQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EdgeWithPropertyValueQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EdgeWithPropertyValueQuery;
  static deserializeBinaryFromReader(message: EdgeWithPropertyValueQuery, reader: jspb.BinaryReader): EdgeWithPropertyValueQuery;
}

export namespace EdgeWithPropertyValueQuery {
  export type AsObject = {
    name?: Identifier.AsObject,
    value?: Json.AsObject,
  }
}

export class PipeQuery extends jspb.Message {
  hasInner(): boolean;
  clearInner(): void;
  getInner(): Query | undefined;
  setInner(value?: Query): void;

  getDirection(): EdgeDirectionMap[keyof EdgeDirectionMap];
  setDirection(value: EdgeDirectionMap[keyof EdgeDirectionMap]): void;

  getLimit(): number;
  setLimit(value: number): void;

  hasT(): boolean;
  clearT(): void;
  getT(): Identifier | undefined;
  setT(value?: Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PipeQuery.AsObject;
  static toObject(includeInstance: boolean, msg: PipeQuery): PipeQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PipeQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PipeQuery;
  static deserializeBinaryFromReader(message: PipeQuery, reader: jspb.BinaryReader): PipeQuery;
}

export namespace PipeQuery {
  export type AsObject = {
    inner?: Query.AsObject,
    direction: EdgeDirectionMap[keyof EdgeDirectionMap],
    limit: number,
    t?: Identifier.AsObject,
  }
}

export class PipePropertyQuery extends jspb.Message {
  hasInner(): boolean;
  clearInner(): void;
  getInner(): Query | undefined;
  setInner(value?: Query): void;

  hasName(): boolean;
  clearName(): void;
  getName(): Identifier | undefined;
  setName(value?: Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PipePropertyQuery.AsObject;
  static toObject(includeInstance: boolean, msg: PipePropertyQuery): PipePropertyQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PipePropertyQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PipePropertyQuery;
  static deserializeBinaryFromReader(message: PipePropertyQuery, reader: jspb.BinaryReader): PipePropertyQuery;
}

export namespace PipePropertyQuery {
  export type AsObject = {
    inner?: Query.AsObject,
    name?: Identifier.AsObject,
  }
}

export class PipeWithPropertyPresenceQuery extends jspb.Message {
  hasInner(): boolean;
  clearInner(): void;
  getInner(): Query | undefined;
  setInner(value?: Query): void;

  hasName(): boolean;
  clearName(): void;
  getName(): Identifier | undefined;
  setName(value?: Identifier): void;

  getExists(): boolean;
  setExists(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PipeWithPropertyPresenceQuery.AsObject;
  static toObject(includeInstance: boolean, msg: PipeWithPropertyPresenceQuery): PipeWithPropertyPresenceQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PipeWithPropertyPresenceQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PipeWithPropertyPresenceQuery;
  static deserializeBinaryFromReader(message: PipeWithPropertyPresenceQuery, reader: jspb.BinaryReader): PipeWithPropertyPresenceQuery;
}

export namespace PipeWithPropertyPresenceQuery {
  export type AsObject = {
    inner?: Query.AsObject,
    name?: Identifier.AsObject,
    exists: boolean,
  }
}

export class PipeWithPropertyValueQuery extends jspb.Message {
  hasInner(): boolean;
  clearInner(): void;
  getInner(): Query | undefined;
  setInner(value?: Query): void;

  hasName(): boolean;
  clearName(): void;
  getName(): Identifier | undefined;
  setName(value?: Identifier): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Json | undefined;
  setValue(value?: Json): void;

  getEqual(): boolean;
  setEqual(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PipeWithPropertyValueQuery.AsObject;
  static toObject(includeInstance: boolean, msg: PipeWithPropertyValueQuery): PipeWithPropertyValueQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PipeWithPropertyValueQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PipeWithPropertyValueQuery;
  static deserializeBinaryFromReader(message: PipeWithPropertyValueQuery, reader: jspb.BinaryReader): PipeWithPropertyValueQuery;
}

export namespace PipeWithPropertyValueQuery {
  export type AsObject = {
    inner?: Query.AsObject,
    name?: Identifier.AsObject,
    value?: Json.AsObject,
    equal: boolean,
  }
}

export class IncludeQuery extends jspb.Message {
  hasInner(): boolean;
  clearInner(): void;
  getInner(): Query | undefined;
  setInner(value?: Query): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncludeQuery.AsObject;
  static toObject(includeInstance: boolean, msg: IncludeQuery): IncludeQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncludeQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncludeQuery;
  static deserializeBinaryFromReader(message: IncludeQuery, reader: jspb.BinaryReader): IncludeQuery;
}

export namespace IncludeQuery {
  export type AsObject = {
    inner?: Query.AsObject,
  }
}

export class CountQuery extends jspb.Message {
  hasInner(): boolean;
  clearInner(): void;
  getInner(): Query | undefined;
  setInner(value?: Query): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountQuery.AsObject;
  static toObject(includeInstance: boolean, msg: CountQuery): CountQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CountQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountQuery;
  static deserializeBinaryFromReader(message: CountQuery, reader: jspb.BinaryReader): CountQuery;
}

export namespace CountQuery {
  export type AsObject = {
    inner?: Query.AsObject,
  }
}

export class QueryOutputValue extends jspb.Message {
  hasVertices(): boolean;
  clearVertices(): void;
  getVertices(): QueryOutputVertices | undefined;
  setVertices(value?: QueryOutputVertices): void;

  hasEdges(): boolean;
  clearEdges(): void;
  getEdges(): QueryOutputEdges | undefined;
  setEdges(value?: QueryOutputEdges): void;

  hasCount(): boolean;
  clearCount(): void;
  getCount(): number;
  setCount(value: number): void;

  hasVertexProperties(): boolean;
  clearVertexProperties(): void;
  getVertexProperties(): QueryOutputVertexProperties | undefined;
  setVertexProperties(value?: QueryOutputVertexProperties): void;

  hasEdgeProperties(): boolean;
  clearEdgeProperties(): void;
  getEdgeProperties(): QueryOutputEdgeProperties | undefined;
  setEdgeProperties(value?: QueryOutputEdgeProperties): void;

  getValueCase(): QueryOutputValue.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOutputValue.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOutputValue): QueryOutputValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryOutputValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOutputValue;
  static deserializeBinaryFromReader(message: QueryOutputValue, reader: jspb.BinaryReader): QueryOutputValue;
}

export namespace QueryOutputValue {
  export type AsObject = {
    vertices?: QueryOutputVertices.AsObject,
    edges?: QueryOutputEdges.AsObject,
    count: number,
    vertexProperties?: QueryOutputVertexProperties.AsObject,
    edgeProperties?: QueryOutputEdgeProperties.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    VERTICES = 1,
    EDGES = 2,
    COUNT = 3,
    VERTEX_PROPERTIES = 4,
    EDGE_PROPERTIES = 5,
  }
}

export class QueryOutputVertices extends jspb.Message {
  clearVerticesList(): void;
  getVerticesList(): Array<Vertex>;
  setVerticesList(value: Array<Vertex>): void;
  addVertices(value?: Vertex, index?: number): Vertex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOutputVertices.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOutputVertices): QueryOutputVertices.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryOutputVertices, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOutputVertices;
  static deserializeBinaryFromReader(message: QueryOutputVertices, reader: jspb.BinaryReader): QueryOutputVertices;
}

export namespace QueryOutputVertices {
  export type AsObject = {
    verticesList: Array<Vertex.AsObject>,
  }
}

export class QueryOutputEdges extends jspb.Message {
  clearEdgesList(): void;
  getEdgesList(): Array<Edge>;
  setEdgesList(value: Array<Edge>): void;
  addEdges(value?: Edge, index?: number): Edge;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOutputEdges.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOutputEdges): QueryOutputEdges.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryOutputEdges, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOutputEdges;
  static deserializeBinaryFromReader(message: QueryOutputEdges, reader: jspb.BinaryReader): QueryOutputEdges;
}

export namespace QueryOutputEdges {
  export type AsObject = {
    edgesList: Array<Edge.AsObject>,
  }
}

export class QueryOutputVertexProperties extends jspb.Message {
  clearVertexPropertiesList(): void;
  getVertexPropertiesList(): Array<VertexProperties>;
  setVertexPropertiesList(value: Array<VertexProperties>): void;
  addVertexProperties(value?: VertexProperties, index?: number): VertexProperties;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOutputVertexProperties.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOutputVertexProperties): QueryOutputVertexProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryOutputVertexProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOutputVertexProperties;
  static deserializeBinaryFromReader(message: QueryOutputVertexProperties, reader: jspb.BinaryReader): QueryOutputVertexProperties;
}

export namespace QueryOutputVertexProperties {
  export type AsObject = {
    vertexPropertiesList: Array<VertexProperties.AsObject>,
  }
}

export class QueryOutputEdgeProperties extends jspb.Message {
  clearEdgePropertiesList(): void;
  getEdgePropertiesList(): Array<EdgeProperties>;
  setEdgePropertiesList(value: Array<EdgeProperties>): void;
  addEdgeProperties(value?: EdgeProperties, index?: number): EdgeProperties;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryOutputEdgeProperties.AsObject;
  static toObject(includeInstance: boolean, msg: QueryOutputEdgeProperties): QueryOutputEdgeProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryOutputEdgeProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryOutputEdgeProperties;
  static deserializeBinaryFromReader(message: QueryOutputEdgeProperties, reader: jspb.BinaryReader): QueryOutputEdgeProperties;
}

export namespace QueryOutputEdgeProperties {
  export type AsObject = {
    edgePropertiesList: Array<EdgeProperties.AsObject>,
  }
}

export class NamedProperty extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): Identifier | undefined;
  setName(value?: Identifier): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Json | undefined;
  setValue(value?: Json): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamedProperty.AsObject;
  static toObject(includeInstance: boolean, msg: NamedProperty): NamedProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamedProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamedProperty;
  static deserializeBinaryFromReader(message: NamedProperty, reader: jspb.BinaryReader): NamedProperty;
}

export namespace NamedProperty {
  export type AsObject = {
    name?: Identifier.AsObject,
    value?: Json.AsObject,
  }
}

export class VertexProperty extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): Uuid | undefined;
  setId(value?: Uuid): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Json | undefined;
  setValue(value?: Json): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VertexProperty.AsObject;
  static toObject(includeInstance: boolean, msg: VertexProperty): VertexProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VertexProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VertexProperty;
  static deserializeBinaryFromReader(message: VertexProperty, reader: jspb.BinaryReader): VertexProperty;
}

export namespace VertexProperty {
  export type AsObject = {
    id?: Uuid.AsObject,
    value?: Json.AsObject,
  }
}

export class VertexProperties extends jspb.Message {
  hasVertex(): boolean;
  clearVertex(): void;
  getVertex(): Vertex | undefined;
  setVertex(value?: Vertex): void;

  clearPropsList(): void;
  getPropsList(): Array<NamedProperty>;
  setPropsList(value: Array<NamedProperty>): void;
  addProps(value?: NamedProperty, index?: number): NamedProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VertexProperties.AsObject;
  static toObject(includeInstance: boolean, msg: VertexProperties): VertexProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VertexProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VertexProperties;
  static deserializeBinaryFromReader(message: VertexProperties, reader: jspb.BinaryReader): VertexProperties;
}

export namespace VertexProperties {
  export type AsObject = {
    vertex?: Vertex.AsObject,
    propsList: Array<NamedProperty.AsObject>,
  }
}

export class EdgeProperty extends jspb.Message {
  hasEdge(): boolean;
  clearEdge(): void;
  getEdge(): Edge | undefined;
  setEdge(value?: Edge): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Json | undefined;
  setValue(value?: Json): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EdgeProperty.AsObject;
  static toObject(includeInstance: boolean, msg: EdgeProperty): EdgeProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EdgeProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EdgeProperty;
  static deserializeBinaryFromReader(message: EdgeProperty, reader: jspb.BinaryReader): EdgeProperty;
}

export namespace EdgeProperty {
  export type AsObject = {
    edge?: Edge.AsObject,
    value?: Json.AsObject,
  }
}

export class EdgeProperties extends jspb.Message {
  hasEdge(): boolean;
  clearEdge(): void;
  getEdge(): Edge | undefined;
  setEdge(value?: Edge): void;

  clearPropsList(): void;
  getPropsList(): Array<NamedProperty>;
  setPropsList(value: Array<NamedProperty>): void;
  addProps(value?: NamedProperty, index?: number): NamedProperty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EdgeProperties.AsObject;
  static toObject(includeInstance: boolean, msg: EdgeProperties): EdgeProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EdgeProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EdgeProperties;
  static deserializeBinaryFromReader(message: EdgeProperties, reader: jspb.BinaryReader): EdgeProperties;
}

export namespace EdgeProperties {
  export type AsObject = {
    edge?: Edge.AsObject,
    propsList: Array<NamedProperty.AsObject>,
  }
}

export class BulkInsertItem extends jspb.Message {
  hasVertex(): boolean;
  clearVertex(): void;
  getVertex(): Vertex | undefined;
  setVertex(value?: Vertex): void;

  hasEdge(): boolean;
  clearEdge(): void;
  getEdge(): Edge | undefined;
  setEdge(value?: Edge): void;

  hasVertexProperty(): boolean;
  clearVertexProperty(): void;
  getVertexProperty(): VertexPropertyBulkInsertItem | undefined;
  setVertexProperty(value?: VertexPropertyBulkInsertItem): void;

  hasEdgeProperty(): boolean;
  clearEdgeProperty(): void;
  getEdgeProperty(): EdgePropertyBulkInsertItem | undefined;
  setEdgeProperty(value?: EdgePropertyBulkInsertItem): void;

  getItemCase(): BulkInsertItem.ItemCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BulkInsertItem.AsObject;
  static toObject(includeInstance: boolean, msg: BulkInsertItem): BulkInsertItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BulkInsertItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BulkInsertItem;
  static deserializeBinaryFromReader(message: BulkInsertItem, reader: jspb.BinaryReader): BulkInsertItem;
}

export namespace BulkInsertItem {
  export type AsObject = {
    vertex?: Vertex.AsObject,
    edge?: Edge.AsObject,
    vertexProperty?: VertexPropertyBulkInsertItem.AsObject,
    edgeProperty?: EdgePropertyBulkInsertItem.AsObject,
  }

  export enum ItemCase {
    ITEM_NOT_SET = 0,
    VERTEX = 1,
    EDGE = 2,
    VERTEX_PROPERTY = 3,
    EDGE_PROPERTY = 4,
  }
}

export class VertexPropertyBulkInsertItem extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): Uuid | undefined;
  setId(value?: Uuid): void;

  hasName(): boolean;
  clearName(): void;
  getName(): Identifier | undefined;
  setName(value?: Identifier): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Json | undefined;
  setValue(value?: Json): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VertexPropertyBulkInsertItem.AsObject;
  static toObject(includeInstance: boolean, msg: VertexPropertyBulkInsertItem): VertexPropertyBulkInsertItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VertexPropertyBulkInsertItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VertexPropertyBulkInsertItem;
  static deserializeBinaryFromReader(message: VertexPropertyBulkInsertItem, reader: jspb.BinaryReader): VertexPropertyBulkInsertItem;
}

export namespace VertexPropertyBulkInsertItem {
  export type AsObject = {
    id?: Uuid.AsObject,
    name?: Identifier.AsObject,
    value?: Json.AsObject,
  }
}

export class EdgePropertyBulkInsertItem extends jspb.Message {
  hasEdge(): boolean;
  clearEdge(): void;
  getEdge(): Edge | undefined;
  setEdge(value?: Edge): void;

  hasName(): boolean;
  clearName(): void;
  getName(): Identifier | undefined;
  setName(value?: Identifier): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Json | undefined;
  setValue(value?: Json): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EdgePropertyBulkInsertItem.AsObject;
  static toObject(includeInstance: boolean, msg: EdgePropertyBulkInsertItem): EdgePropertyBulkInsertItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EdgePropertyBulkInsertItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EdgePropertyBulkInsertItem;
  static deserializeBinaryFromReader(message: EdgePropertyBulkInsertItem, reader: jspb.BinaryReader): EdgePropertyBulkInsertItem;
}

export namespace EdgePropertyBulkInsertItem {
  export type AsObject = {
    edge?: Edge.AsObject,
    name?: Identifier.AsObject,
    value?: Json.AsObject,
  }
}

export class IndexPropertyRequest extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): Identifier | undefined;
  setName(value?: Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexPropertyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IndexPropertyRequest): IndexPropertyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexPropertyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexPropertyRequest;
  static deserializeBinaryFromReader(message: IndexPropertyRequest, reader: jspb.BinaryReader): IndexPropertyRequest;
}

export namespace IndexPropertyRequest {
  export type AsObject = {
    name?: Identifier.AsObject,
  }
}

export class SetPropertiesRequest extends jspb.Message {
  hasQ(): boolean;
  clearQ(): void;
  getQ(): Query | undefined;
  setQ(value?: Query): void;

  hasName(): boolean;
  clearName(): void;
  getName(): Identifier | undefined;
  setName(value?: Identifier): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Json | undefined;
  setValue(value?: Json): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetPropertiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetPropertiesRequest): SetPropertiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetPropertiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetPropertiesRequest;
  static deserializeBinaryFromReader(message: SetPropertiesRequest, reader: jspb.BinaryReader): SetPropertiesRequest;
}

export namespace SetPropertiesRequest {
  export type AsObject = {
    q?: Query.AsObject,
    name?: Identifier.AsObject,
    value?: Json.AsObject,
  }
}

export class CreateResponse extends jspb.Message {
  getCreated(): boolean;
  setCreated(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    created: boolean,
  }
}

export class ExecutePluginRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasArg(): boolean;
  clearArg(): void;
  getArg(): Json | undefined;
  setArg(value?: Json): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePluginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePluginRequest): ExecutePluginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePluginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePluginRequest;
  static deserializeBinaryFromReader(message: ExecutePluginRequest, reader: jspb.BinaryReader): ExecutePluginRequest;
}

export namespace ExecutePluginRequest {
  export type AsObject = {
    name: string,
    arg?: Json.AsObject,
  }
}

export class ExecutePluginResponse extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): Json | undefined;
  setValue(value?: Json): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutePluginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutePluginResponse): ExecutePluginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutePluginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutePluginResponse;
  static deserializeBinaryFromReader(message: ExecutePluginResponse, reader: jspb.BinaryReader): ExecutePluginResponse;
}

export namespace ExecutePluginResponse {
  export type AsObject = {
    value?: Json.AsObject,
  }
}

export interface EdgeDirectionMap {
  OUTBOUND: 0;
  INBOUND: 1;
}

export const EdgeDirection: EdgeDirectionMap;

