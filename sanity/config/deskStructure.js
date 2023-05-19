import { MdOutlineChurch as historyIcon } from 'react-icons/md';

///////////////////////////////////////////////////////

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
        .title('Contact Us')
        // .child(S.editor().schemaType('contactUs').documentId('contactUs')),
        .child(
          S.list()
            .title('Contact Us')
            .items([
              S.listItem()
                .title('Contact Us Main Page')
                .child(
                  S.editor().schemaType('contactUs').documentId('contactUs')
                ),
              S.listItem()
                .title('Social Media')
                .child(
                  S.documentList()
                    .id('socialMediaPlatform')
                    .title('Social Media')
                    .schemaType('socialMediaPlatform')
                    .filter('_type == "socialMediaPlatform"')
                ),
              S.listItem()
                .title('Pastoral Care')
                .child(
                  S.editor()
                    .schemaType('pastoralCare')
                    .documentId('pastoralCare')
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
                    .id('sermon')
                    .title('Sermons')
                    .schemaType('sermon')
                    .filter('_type == "sermon" ')
                ),
            ])
        ),
      // S.listItem()
      //   .title('Social Media')
      //   .child(
      //     S.documentList()
      //       .id('socialMediaPlatform')
      //       .title('Social Media')
      //       .schemaType('socialMediaPlatform')
      //       .filter('_type == "socialMediaPlatform"')
      //   ),
      S.listItem()
        .title('Facility Rental')
        .child(S.editor().schemaType('rental').documentId('rental')),
    ]);
