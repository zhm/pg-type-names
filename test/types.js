import chai from 'chai';
import types from '../src';

chai.should();

describe('postgres type names', () => {
  it('returns the name given a type oid', () => {
    types.names[20].should.eql('bigint');
  });

  it('returns the oid given a type name', () => {
    types.oids['bigint'].should.eql(20);
  });

  it('returns the type description given a type oid', () => {
    types.descriptions['bigint'].should.eql('~18 digit integer, 8-byte storage');
  });
});
