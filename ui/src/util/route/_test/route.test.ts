import { Location } from '../../../route/route'
import { isRoute } from '../route'

describe('route tester against current location', () => {
  it('returns true on location without slashes', () => {
    // given
    const tested = 'example' as Location
    const current = 'example'

    // when
    const ir = isRoute(tested, current)

    // then
    expect(ir).toBeTruthy()
  })

  it('returns true on / location', () => {
    // given
    const tested = '/' as Location
    const current = ''

    // when
    const ir = isRoute(tested, current)

    // then
    expect(ir).toBeTruthy()
  })

  it('returns true on location with leading and trailing slash', () => {
    // given
    const tested = 'example' as Location
    const current = '/example/'

    // when
    const ir = isRoute(tested, current)

    // then
    expect(ir).toBeTruthy()
  })

  it('returns false on different locations', () => {
    // given
    const tested = 'example' as Location
    const current = 'example1'

    // when
    const ir = isRoute(tested, current)

    // then
    expect(ir).toBeFalsy()
  })
})
