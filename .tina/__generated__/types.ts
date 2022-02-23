//@ts-nocheck
// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
import { gql } from 'tinacms';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
  form: Scalars['JSON'];
  values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  getCollection: Collection;
  getCollections: Array<Collection>;
  node: Node;
  getDocument: DocumentNode;
  getDocumentList: DocumentConnection;
  getDocumentFields: Scalars['JSON'];
  getPageDocument: PageDocument;
  getPageList: PageConnection;
  getPostDocument: PostDocument;
  getPostList: PostConnection;
};


export type QueryGetCollectionArgs = {
  collection?: InputMaybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetPageDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetPageListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};


export type QueryGetPostDocumentArgs = {
  relativePath?: InputMaybe<Scalars['String']>;
};


export type QueryGetPostListArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']>;
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Float']>;
  last?: InputMaybe<Scalars['Float']>;
};

export type DocumentNode = PageDocument | PostDocument;

export type PageHeader = {
  __typename?: 'PageHeader';
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type PageSectionTextSection = {
  __typename?: 'PageSectionTextSection';
  body?: Maybe<Scalars['JSON']>;
};

export type PageSectionImageTextSection = {
  __typename?: 'PageSectionImageTextSection';
  body?: Maybe<Scalars['JSON']>;
  image?: Maybe<Scalars['String']>;
};

export type PageSection = PageSectionTextSection | PageSectionImageTextSection;

export type Page = {
  __typename?: 'Page';
  header?: Maybe<PageHeader>;
  section?: Maybe<Array<Maybe<PageSection>>>;
};

export type PageDocument = Node & Document & {
  __typename?: 'PageDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Page;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type PageConnectionEdges = {
  __typename?: 'PageConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PageDocument>;
};

export type PageConnection = Connection & {
  __typename?: 'PageConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PageConnectionEdges>>>;
};

export type PostSeo = {
  __typename?: 'PostSeo';
  canonical?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  noIndex?: Maybe<Scalars['Boolean']>;
};

export type Post = {
  __typename?: 'Post';
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['JSON']>;
  seo?: Maybe<PostSeo>;
};

export type PostDocument = Node & Document & {
  __typename?: 'PostDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Post;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PostDocument>;
};

export type PostConnection = Connection & {
  __typename?: 'PostConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Float'];
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  createDocument: DocumentNode;
  updatePageDocument: PageDocument;
  createPageDocument: PageDocument;
  updatePostDocument: PostDocument;
  createPostDocument: PostDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']>;
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdatePageDocumentArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};


export type MutationCreatePageDocumentArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};


export type MutationUpdatePostDocumentArgs = {
  relativePath: Scalars['String'];
  params: PostMutation;
};


export type MutationCreatePostDocumentArgs = {
  relativePath: Scalars['String'];
  params: PostMutation;
};

export type DocumentMutation = {
  page?: InputMaybe<PageMutation>;
  post?: InputMaybe<PostMutation>;
};

export type PageHeaderMutation = {
  title?: InputMaybe<Scalars['String']>;
  subtitle?: InputMaybe<Scalars['String']>;
};

export type PageSectionTextSectionMutation = {
  body?: InputMaybe<Scalars['JSON']>;
};

export type PageSectionImageTextSectionMutation = {
  body?: InputMaybe<Scalars['JSON']>;
  image?: InputMaybe<Scalars['String']>;
};

export type PageSectionMutation = {
  textSection?: InputMaybe<PageSectionTextSectionMutation>;
  imageTextSection?: InputMaybe<PageSectionImageTextSectionMutation>;
};

export type PageMutation = {
  header?: InputMaybe<PageHeaderMutation>;
  section?: InputMaybe<Array<InputMaybe<PageSectionMutation>>>;
};

export type PostSeoMutation = {
  canonical?: InputMaybe<Scalars['String']>;
  metaTitle?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
};

export type PostMutation = {
  title?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['JSON']>;
  seo?: InputMaybe<PostSeoMutation>;
};

export type PagePartsFragment = { __typename?: 'Page', header?: { __typename: 'PageHeader', title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined, section?: Array<{ __typename: 'PageSectionTextSection', body?: any | null | undefined } | { __typename: 'PageSectionImageTextSection', body?: any | null | undefined, image?: string | null | undefined } | null | undefined> | null | undefined };

export type PostPartsFragment = { __typename?: 'Post', title?: string | null | undefined, body?: any | null | undefined, seo?: { __typename: 'PostSeo', canonical?: string | null | undefined, metaTitle?: string | null | undefined, description?: string | null | undefined, image?: string | null | undefined, noIndex?: boolean | null | undefined } | null | undefined };

export type GetPageDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetPageDocumentQuery = { __typename?: 'Query', getPageDocument: { __typename?: 'PageDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Page', header?: { __typename: 'PageHeader', title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined, section?: Array<{ __typename: 'PageSectionTextSection', body?: any | null | undefined } | { __typename: 'PageSectionImageTextSection', body?: any | null | undefined, image?: string | null | undefined } | null | undefined> | null | undefined } } };

export type GetPageListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPageListQuery = { __typename?: 'Query', getPageList: { __typename?: 'PageConnection', totalCount: number, edges?: Array<{ __typename?: 'PageConnectionEdges', node?: { __typename?: 'PageDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Page', header?: { __typename: 'PageHeader', title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined, section?: Array<{ __typename: 'PageSectionTextSection', body?: any | null | undefined } | { __typename: 'PageSectionImageTextSection', body?: any | null | undefined, image?: string | null | undefined } | null | undefined> | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export type GetPostDocumentQueryVariables = Exact<{
  relativePath: Scalars['String'];
}>;


export type GetPostDocumentQuery = { __typename?: 'Query', getPostDocument: { __typename?: 'PostDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Post', title?: string | null | undefined, body?: any | null | undefined, seo?: { __typename: 'PostSeo', canonical?: string | null | undefined, metaTitle?: string | null | undefined, description?: string | null | undefined, image?: string | null | undefined, noIndex?: boolean | null | undefined } | null | undefined } } };

export type GetPostListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostListQuery = { __typename?: 'Query', getPostList: { __typename?: 'PostConnection', totalCount: number, edges?: Array<{ __typename?: 'PostConnectionEdges', node?: { __typename?: 'PostDocument', id: string, sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, data: { __typename?: 'Post', title?: string | null | undefined, body?: any | null | undefined, seo?: { __typename: 'PostSeo', canonical?: string | null | undefined, metaTitle?: string | null | undefined, description?: string | null | undefined, image?: string | null | undefined, noIndex?: boolean | null | undefined } | null | undefined } } | null | undefined } | null | undefined> | null | undefined } };

export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  header {
    __typename
    title
    subtitle
  }
  section {
    __typename
    ... on PageSectionTextSection {
      body
    }
    ... on PageSectionImageTextSection {
      body
      image
    }
  }
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  title
  body
  seo {
    __typename
    canonical
    metaTitle
    description
    image
    noIndex
  }
}
    `;
export const GetPageDocumentDocument = gql`
    query getPageDocument($relativePath: String!) {
  getPageDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...PageParts
    }
  }
}
    ${PagePartsFragmentDoc}`;
export const GetPageListDocument = gql`
    query getPageList {
  getPageList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...PageParts
        }
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export const GetPostDocumentDocument = gql`
    query getPostDocument($relativePath: String!) {
  getPostDocument(relativePath: $relativePath) {
    sys {
      filename
      basename
      breadcrumbs
      path
      relativePath
      extension
    }
    id
    data {
      ...PostParts
    }
  }
}
    ${PostPartsFragmentDoc}`;
export const GetPostListDocument = gql`
    query getPostList {
  getPostList {
    totalCount
    edges {
      node {
        id
        sys {
          filename
          basename
          breadcrumbs
          path
          relativePath
          extension
        }
        data {
          ...PostParts
        }
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      getPageDocument(variables: GetPageDocumentQueryVariables, options?: C): Promise<{data: GetPageDocumentQuery, variables: GetPageDocumentQueryVariables, query: string}> {
        return requester<{data: GetPageDocumentQuery, variables: GetPageDocumentQueryVariables, query: string}, GetPageDocumentQueryVariables>(GetPageDocumentDocument, variables, options);
      },
    getPageList(variables?: GetPageListQueryVariables, options?: C): Promise<{data: GetPageListQuery, variables: GetPageListQueryVariables, query: string}> {
        return requester<{data: GetPageListQuery, variables: GetPageListQueryVariables, query: string}, GetPageListQueryVariables>(GetPageListDocument, variables, options);
      },
    getPostDocument(variables: GetPostDocumentQueryVariables, options?: C): Promise<{data: GetPostDocumentQuery, variables: GetPostDocumentQueryVariables, query: string}> {
        return requester<{data: GetPostDocumentQuery, variables: GetPostDocumentQueryVariables, query: string}, GetPostDocumentQueryVariables>(GetPostDocumentDocument, variables, options);
      },
    getPostList(variables?: GetPostListQueryVariables, options?: C): Promise<{data: GetPostListQuery, variables: GetPostListQueryVariables, query: string}> {
        return requester<{data: GetPostListQuery, variables: GetPostListQueryVariables, query: string}, GetPostListQueryVariables>(GetPostListDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { staticRequest } from 'tinacms'
const requester: (doc: any, vars?: any, options?: any) => Promise<any> = async (
  doc,
  vars,
  _options
) => {
  let data = {}
  try {
    data = await staticRequest({
      query: doc,
      variables: vars,
    })
  } catch (e) {
    // swallow errors related to document creation
    console.warn('Warning: There was an error when fetching data')
    console.warn(e)
  }

  return { data, query: doc, variables: vars || {} }
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = ()=>getSdk(requester)

