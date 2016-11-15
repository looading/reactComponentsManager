import { expect } from 'chai';
import _ from 'underscore';
import { clone, isEqual } from '../src/util';

describe("util function::isEqual test:", () => {

  it('1 === 1', () => {
    let a = 1,b = 1;
    expect(isEqual(a, b)).to.be.ok;
  })

  it('1 !== 2', () => {
    let a = 1,b = 2;
    expect(isEqual(a, b)).to.be.false;
  })

  it('1 !== "1"', () => {
    let a = 1,b = "1";
    expect(isEqual(a, b)).to.be.false;
  })

  it('"1" === "1"', () => {
    let a = "1",b = "1";
    expect(isEqual(a, b)).to.be.ok;
  })

  it('"2" !== "1"', () => {
    let a = "2",b = "1";
    expect(isEqual(a, b)).to.be.false;
  })

  it('[1, 2] === [1, 2]', () => {
    let a = [1, 2],b = [1, 2];
    expect(isEqual(a, b)).to.be.true;
  })

  it('[1, 2] !== [2, 1]', () => {
    let a = [1, 2],b = [2, 1];
    expect(isEqual(a, b)).to.be.false;
  })

  it('[1, "2"] !== [1, 2]', () => {
    let a = [1, "2"],b = [1, 2];
    expect(isEqual(a, b)).to.be.false;
  })

  it('[1, {a: 1}] === [1, {a: 1}]', () => {
    let a = [1, {a: 1}],b = [1, {a: 1}];
    expect(isEqual(a, b)).to.be.true;
  })

  it('[1, {a: 1}] !== [1, {a: "1"}]', () => {
    let a = [1, {a: 1}],b = [1, {a: "1"}];
    expect(isEqual(a, b)).to.be.false;
  })

  it('[1, {a: 1}] !== [1, {a: 2}]', () => {
    let a = [1, {a: 1}],b = [1, {a: 2}];
    expect(isEqual(a, b)).to.be.false;
  })

  it('[1, {a: 1}] !== [1, {c: 1}]', () => {
    let a = [1, {a: 1}],b = [1, {c: 1}];
    expect(isEqual(a, b)).to.be.false;
  })

  it('[1,{a: {c: 1}}] === [1, {a: {c: 1}}]', () => {
    let a = [1, {a: {c: 1}}],b = [1, {a: {c: 1}}];
    expect(isEqual(a, b)).to.be.true;
  })

  it('[1, {a: {c: 1}}] !== [1, {a: {c: "1"}}]', () => {
    let a = [1, {a: {c: 1}}],b = [1, {a: {c: "1"}}];
    expect(isEqual(a, b)).to.be.false;
  })

  it('[1, {a: {c: 1}}] !== [1, { a: {c: 2}}]', () => {
    let a = [1, {a: {c: 1}}],b = [1, {a: {c: 2}}];
    expect(isEqual(a, b)).to.be.false;
  })

  it('[1, [1, 2]] === [1, [1, 2]]', () => {
    let a = [1, [1, 2]],b = [1, [1, 2]];
    expect(isEqual(a, b)).to.be.true;
  })

  it('[1, [1, 3]] !== [1, [1, 2]]', () => {
    let a = [1, [1, 3]],b = [1, [1, 2]];
    expect(isEqual(a, b)).to.be.t;
  })

  it('{a: 1} === {a: 1}', () => {
    let a = {a: 1},b = {a: 1};
    expect(isEqual(a, b)).to.be.true;
  })

  it('{a: 1} !== {a: 2}', () => {
    let a = {a: 1},b = {a: 2};
    expect(isEqual(a, b)).to.be.false;
  })

  it('{a: {c: 1}} === {a: { c: 1}}', () => {
    let a = {a: {c: 1}},b = {a: {c: 1}};
    expect(isEqual(a, b)).to.be.true;
  })

  it('[1, 2, 3 ] !== [1, 2]', () => {
    let a = [1, 2, 3], b = [1, 2];
    expect(isEqual(a, b)).to.be.false;
  })

  it('[1, 2, [1, 2] ] !== [1, 2]', () => {
    let a = [1, 2, [1, 2]], b = [1, 2];
    expect(isEqual(a, b)).to.be.false;
  })

  it('[1, 2, [1, 2, 3] ] !== [1, 2]', () => {
    let a = [1, 2, [1, 2, 3]], b = [1, 2];
    expect(isEqual(a, b)).to.be.false;
  })

  it('[1, 2] !== [1, 2, 3]', () => {
    let a = [1, 2], b = [1, 2, 3];
    expect(isEqual(a, b)).to.be.false;
  })
})

describe("util function::clone test:", () => {
  let obj = {
    a: 1,
    c: 'hello'
  };

  let arr = [
    1,
    [1,2]
  ];

  it("clone Object", () => {
    let newObj = clone(obj);
    expect(isEqual(newObj, obj)).to.be.ok;
  })

  it("clone Array", () => {
    let newArr = clone(arr);
    expect(isEqual(newArr, arr)).to.be.ok;
  })

})
