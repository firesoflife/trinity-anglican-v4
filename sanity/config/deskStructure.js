import { MdOutlineChurch as historyIcon } from 'react-icons/md';

///////////////////////////////////////////////////////

// export const deskStructure = (S) =>
//   S.list()
//     .title('Content')
//     .items([
//       S.listItem()
//         .title('Home')
//         .child(S.editor().schemaType('home').documentId('home')),
//       S.listItem()
//         .title('About')
//         .child(
//           S.list()
//             .title('About')
//             .items([
//               S.listItem()
//                 .title('About')
//                 .child(S.editor().schemaType('about').documentId('about')),
//               S.listItem()
//                 .title('Our History')
//                 .child(
//                   S.editor().schemaType('ourHistory').documentId('ourHistory')
//                 ),
//               S.listItem()
//                 .title('Clergy and People')
//                 .child(
//                   S.documentList()
//                     .title('Clergy and People')
//                     .filter('_type == "staff"')
//                 ),
//             ])
//         ),
//       S.listItem()
//         .title('Worship')
//         .child(
//           S.list()
//             .title('Worship')
//             .items([
//               S.listItem()
//                 .title('Worship')
//                 .child(S.editor().schemaType('worship').documentId('worship')),
//               S.listItem()
//                 .title('What to Expect')
//                 .child(
//                   S.editor()
//                     .schemaType('whatToExpect')
//                     .documentId('whatToExpect')
//                 ),
//               S.listItem()
//                 .title('Sermons')
//                 .child(
//                   S.documentList()
//                     .title('Sermons')
//                     .filter('_type == "sermons" && parent._id == "worship"')
//                 ),
//             ])
//         ),
//     ]);

export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .child(S.editor().schemaType('home').documentId('home')),
      S.listItem()
        .title('About')
        .child(
          S.list()
            .title('About')
            .items([
              S.listItem()
                .title('About')
                .child(S.editor().schemaType('about').documentId('about')),
              S.listItem()
                .title('Our History')
                .child(
                  S.editor().schemaType('ourHistory').documentId('ourHistory')
                ),
              S.listItem()
                .title('Clergy and People')
                .child(
                  S.editor()
                    .schemaType('staffList')
                    .documentId('staffList')
                    .title('Order of Appearance')
                ),
            ])
        ),
      S.listItem()
        .title('Worship')
        .child(
          S.list()
            .title('Worship')
            .items([
              S.listItem()
                .title('Worship Main Page')
                .child(S.editor().schemaType('worship').documentId('worship')),
              S.listItem()
                .title('Worship Schedule')
                .child(
                  S.documentList()
                    .id('worshipSchedule')
                    .schemaType('worshipSchedule')
                    .filter('_type == "worshipSchedule"')
                ),
              S.listItem()
                .title('Sermons')
                .child(
                  S.documentList()
                    .title('Sermons')
                    .filter('_type == "sermons" && parent._id == "worship"')
                ),
            ])
        ),
    ]);
