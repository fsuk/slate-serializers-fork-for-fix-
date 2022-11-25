import { htmlToSlate, slateToHtml } from '../'
import { fixtures as combinedFixtures } from './fixtures/combined'

describe('HTML to Slate JSON transforms', () => {
  describe('Combined', () => {
    const fixtures = combinedFixtures
    for (const fixture of fixtures) {
      it(`${fixture.name}`, () => {
        expect(slateToHtml(fixture.slateOriginal, { enforceTopLevelPTags: true })).toEqual(fixture.html)
        expect(htmlToSlate(fixture.html)).toEqual(fixture.slateReserialized)
        expect(slateToHtml(fixture.slateReserialized)).toEqual(fixture.html)
      })
    }
  })
})

describe('attribute mapping', () => {
  const slate = [
    {
      children: [
        {
          text: 'Some text before an inline link ',
        },
        {
          type: 'link',
          "linkType": "custom",
          url: 'https://github.com/thompsonsj/slate-serializers',
          newTab: true,
          children: [
            {
              text: 'slate-serializers | GitHub',
            },
          ],
        },
        {
          text: '.',
        },
      ],
      type: 'p',
    }
  ]
  const html = '<p>Some text before an inline link <a href="https://github.com/thompsonsj/slate-serializers" target="_blank" data-link-type="custom">slate-serializers | GitHub</a>.</p>'

  it('slateToHtml adds a custom data attribute', () => {
    expect(slateToHtml(slate, {attributePropertyMap: [
      {
        slateAttr: 'linkType',
        htmlAttr: 'data-link-type'
      } 
    ]})).toEqual(html)
  })
})