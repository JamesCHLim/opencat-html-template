# The Schema for project OPENCAT

*Currently based on drupal*

## Content Types

<!-- A series of sections and books. Should this be a view? -->
course
    - image -> hero image

<!-- A section of a course -->
section
    - course (link)
        - list text -> section author(s) (required)
    OR  - taxonomy -> section author(s) (required)
    - image -> section image (required)
    - long text -> section content (required)
    - taxonomy -> section topics
    - comments -> section comments

<!-- A physical book content type with book related content -->
book
    - course (link)
    - image -> book image (required)
    - short text -> book title (required)
        - list text -> book author(s) (required)
    OR  - taxonomy -> book author(s)(required)
    - link -> external book link
    - short -> International Standard Book Number (ISBN)
    - short -> Publisher
    - long text -> book description (required)
    - long text -> book discussion (required)
    - taxonomy -> book topics
    - comments -> book comments

<!-- A simple page -->
page
    - long text -> body (required)

## Media File Types

- Images
- PDF,DOCX
- Video (external link)
- Please no local video or autoplay

## Users

Users should have a home page, where they can view:

- Their name
- Their favourited content
- Their comments
- Ability to add or edit content (editors)
- content Analytics?

## Pages

Landing page -> A view of different things?
About page -> A simple page
Courses page -> A view
Section page -> Full display of section content type
Book page -> Full display of book content type
Login page -> User login page, should only require styling
User page -> User admin page, fields managed in drupal?
