import S from '@sanity/desk-tool/structure-builder'
import { RiGlobalLine, RiHome3Line, RiFlaskLine } from "react-icons/ri";

export default () =>
  S.list()
    .title('Base')
    .items([
        S.listItem()
            .title('Global Content')
            .icon(RiGlobalLine)
            .child(
            S.document()
                .schemaType('globalContent')
                .documentId('globalContent')
        ),
        S.divider(),
        S.listItem()
            .title('Homepage Content')
            .icon(RiHome3Line)
            .child(
            S.document()
                .schemaType('homepageContent')
                .documentId('homepageContent')
        ),
        S.listItem()
            .title('Experiments Page Content')
            .icon(RiFlaskLine)
            .child(
            S.document()
                .schemaType('experimentPageContent')
                .documentId('experimentPageContent')
        ),
        S.divider(),
        ...S.documentTypeListItems()
            .filter(listItem => !['homepageContent','globalContent', 'experimentPageContent'].includes(listItem.getId()))
    ])
    