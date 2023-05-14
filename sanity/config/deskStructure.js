export const deskStructure = (S) =>
  S.list()
    .title('Primary Pages')
    .items([
      S.listItem()
        .title('Home Page')
        .child(S.editor().schemaType('home').documentId('home')),
      S.listItem()
        .title('About Page')
        .child(S.editor().schemaType('about').documentId('about')),
      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) => !['home', 'about'].includes(listItem.getId())
      ),
    ]);
