// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class EventCreated extends ethereum.Event {
  get params(): EventCreated__Params {
    return new EventCreated__Params(this);
  }
}

export class EventCreated__Params {
  _event: EventCreated;

  constructor(event: EventCreated) {
    this._event = event;
  }

  get eventId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get jsonCID(): string {
    return this._event.parameters[1].value.toString();
  }

  get date(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get ticketIds(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }
}

export class TicketBought extends ethereum.Event {
  get params(): TicketBought__Params {
    return new TicketBought__Params(this);
  }
}

export class TicketBought__Params {
  _event: TicketBought;

  constructor(event: TicketBought) {
    this._event = event;
  }

  get ticketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class TicketCreated extends ethereum.Event {
  get params(): TicketCreated__Params {
    return new TicketCreated__Params(this);
  }
}

export class TicketCreated__Params {
  _event: TicketCreated;

  constructor(event: TicketCreated) {
    this._event = event;
  }

  get ticketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TicketInSell extends ethereum.Event {
  get params(): TicketInSell__Params {
    return new TicketInSell__Params(this);
  }
}

export class TicketInSell__Params {
  _event: TicketInSell;

  constructor(event: TicketInSell) {
    this._event = event;
  }

  get ticketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class TicketUsed extends ethereum.Event {
  get params(): TicketUsed__Params {
    return new TicketUsed__Params(this);
  }
}

export class TicketUsed__Params {
  _event: TicketUsed;

  constructor(event: TicketUsed) {
    this._event = event;
  }

  get ticketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class UserTicketsUpdated extends ethereum.Event {
  get params(): UserTicketsUpdated__Params {
    return new UserTicketsUpdated__Params(this);
  }
}

export class UserTicketsUpdated__Params {
  _event: UserTicketsUpdated;

  constructor(event: UserTicketsUpdated) {
    this._event = event;
  }

  get ticketId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get eventIdOfTicket(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class Contract__createEventInputTicketsToSetStruct extends ethereum.Tuple {
  get quantity(): BigInt {
    return this[0].toBigInt();
  }

  get description(): string {
    return this[1].toString();
  }
}

export class Contract__eventsResult {
  value0: string;
  value1: BigInt;
  value2: BigInt;
  value3: Address;
  value4: BigInt;

  constructor(
    value0: string,
    value1: BigInt,
    value2: BigInt,
    value3: Address,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getJsonCID(): string {
    return this.value0;
  }

  getDate(): BigInt {
    return this.value1;
  }

  getResellFees(): BigInt {
    return this.value2;
  }

  getOwner(): Address {
    return this.value3;
  }

  getTicketTypeCount(): BigInt {
    return this.value4;
  }
}

export class Contract__getEventResultValue0Struct extends ethereum.Tuple {
  get jsonCID(): string {
    return this[0].toString();
  }

  get date(): BigInt {
    return this[1].toBigInt();
  }

  get resellFees(): BigInt {
    return this[2].toBigInt();
  }

  get owner(): Address {
    return this[3].toAddress();
  }

  get ticketTypeCount(): BigInt {
    return this[4].toBigInt();
  }
}

export class Contract__getTicketInSellResultValue0Struct extends ethereum.Tuple {
  get remainingQuantity(): BigInt {
    return this[0].toBigInt();
  }

  get price(): BigInt {
    return this[1].toBigInt();
  }
}

export class Contract__ticketsResult {
  value0: BigInt;
  value1: string;

  constructor(value0: BigInt, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }

  getQuantity(): BigInt {
    return this.value0;
  }

  getDescription(): string {
    return this.value1;
  }
}

export class Contract__ticketsInSellResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getRemainingQuantity(): BigInt {
    return this.value0;
  }

  getPrice(): BigInt {
    return this.value1;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  cidToEventId(param0: string): BigInt {
    let result = super.call("cidToEventId", "cidToEventId(string):(uint256)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toBigInt();
  }

  try_cidToEventId(param0: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "cidToEventId",
      "cidToEventId(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createEvent(
    jsonCID: string,
    date: BigInt,
    resellFees: BigInt,
    ticketsToSet: Array<Contract__createEventInputTicketsToSetStruct>
  ): BigInt {
    let result = super.call(
      "createEvent",
      "createEvent(string,uint256,uint256,(uint256,string)[]):(uint256)",
      [
        ethereum.Value.fromString(jsonCID),
        ethereum.Value.fromUnsignedBigInt(date),
        ethereum.Value.fromUnsignedBigInt(resellFees),
        ethereum.Value.fromTupleArray(ticketsToSet)
      ]
    );

    return result[0].toBigInt();
  }

  try_createEvent(
    jsonCID: string,
    date: BigInt,
    resellFees: BigInt,
    ticketsToSet: Array<Contract__createEventInputTicketsToSetStruct>
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createEvent",
      "createEvent(string,uint256,uint256,(uint256,string)[]):(uint256)",
      [
        ethereum.Value.fromString(jsonCID),
        ethereum.Value.fromUnsignedBigInt(date),
        ethereum.Value.fromUnsignedBigInt(resellFees),
        ethereum.Value.fromTupleArray(ticketsToSet)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  eventCount(): BigInt {
    let result = super.call("eventCount", "eventCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_eventCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("eventCount", "eventCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  eventIdOfTicketId(param0: BigInt): BigInt {
    let result = super.call(
      "eventIdOfTicketId",
      "eventIdOfTicketId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_eventIdOfTicketId(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "eventIdOfTicketId",
      "eventIdOfTicketId(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  events(param0: BigInt): Contract__eventsResult {
    let result = super.call(
      "events",
      "events(uint256):(string,uint256,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Contract__eventsResult(
      result[0].toString(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toBigInt()
    );
  }

  try_events(param0: BigInt): ethereum.CallResult<Contract__eventsResult> {
    let result = super.tryCall(
      "events",
      "events(uint256):(string,uint256,uint256,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__eventsResult(
        value[0].toString(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toBigInt()
      )
    );
  }

  getEvent(eventId: BigInt): Contract__getEventResultValue0Struct {
    let result = super.call(
      "getEvent",
      "getEvent(uint256):((string,uint256,uint256,address,uint256))",
      [ethereum.Value.fromUnsignedBigInt(eventId)]
    );

    return changetype<Contract__getEventResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getEvent(
    eventId: BigInt
  ): ethereum.CallResult<Contract__getEventResultValue0Struct> {
    let result = super.tryCall(
      "getEvent",
      "getEvent(uint256):((string,uint256,uint256,address,uint256))",
      [ethereum.Value.fromUnsignedBigInt(eventId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Contract__getEventResultValue0Struct>(value[0].toTuple())
    );
  }

  getTicketInSell(
    user: Address,
    tickedId: BigInt
  ): Contract__getTicketInSellResultValue0Struct {
    let result = super.call(
      "getTicketInSell",
      "getTicketInSell(address,uint256):((uint256,uint256))",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(tickedId)
      ]
    );

    return changetype<Contract__getTicketInSellResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getTicketInSell(
    user: Address,
    tickedId: BigInt
  ): ethereum.CallResult<Contract__getTicketInSellResultValue0Struct> {
    let result = super.tryCall(
      "getTicketInSell",
      "getTicketInSell(address,uint256):((uint256,uint256))",
      [
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromUnsignedBigInt(tickedId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Contract__getTicketInSellResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  recoverAddressFromSignature(
    messageHash: Bytes,
    userSignature: Bytes
  ): Address {
    let result = super.call(
      "recoverAddressFromSignature",
      "recoverAddressFromSignature(bytes32,bytes):(address)",
      [
        ethereum.Value.fromFixedBytes(messageHash),
        ethereum.Value.fromBytes(userSignature)
      ]
    );

    return result[0].toAddress();
  }

  try_recoverAddressFromSignature(
    messageHash: Bytes,
    userSignature: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "recoverAddressFromSignature",
      "recoverAddressFromSignature(bytes32,bytes):(address)",
      [
        ethereum.Value.fromFixedBytes(messageHash),
        ethereum.Value.fromBytes(userSignature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tickets(param0: BigInt): Contract__ticketsResult {
    let result = super.call("tickets", "tickets(uint256):(uint256,string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return new Contract__ticketsResult(
      result[0].toBigInt(),
      result[1].toString()
    );
  }

  try_tickets(param0: BigInt): ethereum.CallResult<Contract__ticketsResult> {
    let result = super.tryCall("tickets", "tickets(uint256):(uint256,string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__ticketsResult(value[0].toBigInt(), value[1].toString())
    );
  }

  ticketsCount(): BigInt {
    let result = super.call("ticketsCount", "ticketsCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_ticketsCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ticketsCount", "ticketsCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ticketsInSell(
    param0: Address,
    param1: BigInt
  ): Contract__ticketsInSellResult {
    let result = super.call(
      "ticketsInSell",
      "ticketsInSell(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new Contract__ticketsInSellResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_ticketsInSell(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Contract__ticketsInSellResult> {
    let result = super.tryCall(
      "ticketsInSell",
      "ticketsInSell(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__ticketsInSellResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  ticketsOfEvents(param0: BigInt, param1: BigInt): BigInt {
    let result = super.call(
      "ticketsOfEvents",
      "ticketsOfEvents(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_ticketsOfEvents(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ticketsOfEvents",
      "ticketsOfEvents(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  uri(param0: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toString();
  }

  try_uri(param0: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  verifyMsgHash(messageHash: Bytes, userSignature: Bytes): boolean {
    let result = super.call(
      "verifyMsgHash",
      "verifyMsgHash(bytes32,bytes):(bool)",
      [
        ethereum.Value.fromFixedBytes(messageHash),
        ethereum.Value.fromBytes(userSignature)
      ]
    );

    return result[0].toBoolean();
  }

  try_verifyMsgHash(
    messageHash: Bytes,
    userSignature: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "verifyMsgHash",
      "verifyMsgHash(bytes32,bytes):(bool)",
      [
        ethereum.Value.fromFixedBytes(messageHash),
        ethereum.Value.fromBytes(userSignature)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyTicketCall extends ethereum.Call {
  get inputs(): BuyTicketCall__Inputs {
    return new BuyTicketCall__Inputs(this);
  }

  get outputs(): BuyTicketCall__Outputs {
    return new BuyTicketCall__Outputs(this);
  }
}

export class BuyTicketCall__Inputs {
  _call: BuyTicketCall;

  constructor(call: BuyTicketCall) {
    this._call = call;
  }

  get ticketsIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get quantity(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get from(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class BuyTicketCall__Outputs {
  _call: BuyTicketCall;

  constructor(call: BuyTicketCall) {
    this._call = call;
  }
}

export class CreateEventCall extends ethereum.Call {
  get inputs(): CreateEventCall__Inputs {
    return new CreateEventCall__Inputs(this);
  }

  get outputs(): CreateEventCall__Outputs {
    return new CreateEventCall__Outputs(this);
  }
}

export class CreateEventCall__Inputs {
  _call: CreateEventCall;

  constructor(call: CreateEventCall) {
    this._call = call;
  }

  get jsonCID(): string {
    return this._call.inputValues[0].value.toString();
  }

  get date(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get resellFees(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get ticketsToSet(): Array<CreateEventCallTicketsToSetStruct> {
    return this._call.inputValues[3].value.toTupleArray<
      CreateEventCallTicketsToSetStruct
    >();
  }
}

export class CreateEventCall__Outputs {
  _call: CreateEventCall;

  constructor(call: CreateEventCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateEventCallTicketsToSetStruct extends ethereum.Tuple {
  get quantity(): BigInt {
    return this[0].toBigInt();
  }

  get description(): string {
    return this[1].toString();
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SellTicketInMarketplaceCall extends ethereum.Call {
  get inputs(): SellTicketInMarketplaceCall__Inputs {
    return new SellTicketInMarketplaceCall__Inputs(this);
  }

  get outputs(): SellTicketInMarketplaceCall__Outputs {
    return new SellTicketInMarketplaceCall__Outputs(this);
  }
}

export class SellTicketInMarketplaceCall__Inputs {
  _call: SellTicketInMarketplaceCall;

  constructor(call: SellTicketInMarketplaceCall) {
    this._call = call;
  }

  get ticketIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get howMany(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get sellPrices(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class SellTicketInMarketplaceCall__Outputs {
  _call: SellTicketInMarketplaceCall;

  constructor(call: SellTicketInMarketplaceCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class UseMultipleTicketsIdsCall extends ethereum.Call {
  get inputs(): UseMultipleTicketsIdsCall__Inputs {
    return new UseMultipleTicketsIdsCall__Inputs(this);
  }

  get outputs(): UseMultipleTicketsIdsCall__Outputs {
    return new UseMultipleTicketsIdsCall__Outputs(this);
  }
}

export class UseMultipleTicketsIdsCall__Inputs {
  _call: UseMultipleTicketsIdsCall;

  constructor(call: UseMultipleTicketsIdsCall) {
    this._call = call;
  }

  get ticketsIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get quantity(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class UseMultipleTicketsIdsCall__Outputs {
  _call: UseMultipleTicketsIdsCall;

  constructor(call: UseMultipleTicketsIdsCall) {
    this._call = call;
  }
}

export class UseTicketCall extends ethereum.Call {
  get inputs(): UseTicketCall__Inputs {
    return new UseTicketCall__Inputs(this);
  }

  get outputs(): UseTicketCall__Outputs {
    return new UseTicketCall__Outputs(this);
  }
}

export class UseTicketCall__Inputs {
  _call: UseTicketCall;

  constructor(call: UseTicketCall) {
    this._call = call;
  }

  get ticketId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get messageHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get userSignature(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class UseTicketCall__Outputs {
  _call: UseTicketCall;

  constructor(call: UseTicketCall) {
    this._call = call;
  }
}
