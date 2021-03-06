import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from './middleware';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  /** Date custom scalar type */
  Date: Date;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IQuery = {
   __typename?: 'Query';
  latest10Q?: Maybe<Scalars['Any']>;
  schema: IDbSchema;
  me: IUser;
};


export type IQueryLatest10QArgs = {
  ticker: Scalars['String'];
};

export type IDbDiffChange = {
   __typename?: 'DBDiffChange';
  path: Array<Scalars['Any']>;
  actual?: Maybe<Scalars['String']>;
  definition?: Maybe<Scalars['String']>;
};

export type IDbDiff = {
   __typename?: 'DBDiff';
  add: Array<Maybe<IDbDiffChange>>;
  update: Array<Maybe<IDbDiffChange>>;
  remove: Array<Maybe<IDbDiffChange>>;
};

export type IDbSchema = {
   __typename?: 'DBSchema';
  diff: IDbDiff;
  actual: Scalars['String'];
};

export type IUser = {
   __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['Date'];
  updatedAt?: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  username: Scalars['String'];
};

export type IUserResponse = {
   __typename?: 'UserResponse';
  ok: Scalars['Boolean'];
  user?: Maybe<IUser>;
  errors?: Maybe<Array<IError>>;
};

export type IMutation = {
   __typename?: 'Mutation';
  register: IGenericResponse;
  login: IGenericResponse;
  userUpdate: IUserResponse;
};


export type IMutationRegisterArgs = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationLoginArgs = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationUserUpdateArgs = {
  username?: Maybe<Scalars['String']>;
};



export type IError = {
   __typename?: 'Error';
  field: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type IGenericResponse = {
   __typename?: 'GenericResponse';
  ok: Scalars['Boolean'];
  errors?: Maybe<Array<IError>>;
};

export enum ICacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}




export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Query: ResolverTypeWrapper<{}>,
  DBDiffChange: ResolverTypeWrapper<IDbDiffChange>,
  DBDiff: ResolverTypeWrapper<IDbDiff>,
  DBSchema: ResolverTypeWrapper<IDbSchema>,
  User: ResolverTypeWrapper<IUser>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  UserResponse: ResolverTypeWrapper<IUserResponse>,
  Mutation: ResolverTypeWrapper<{}>,
  Any: ResolverTypeWrapper<Scalars['Any']>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  Error: ResolverTypeWrapper<IError>,
  GenericResponse: ResolverTypeWrapper<IGenericResponse>,
  CacheControlScope: ICacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Query: {},
  DBDiffChange: IDbDiffChange,
  DBDiff: IDbDiff,
  DBSchema: IDbSchema,
  User: IUser,
  ID: Scalars['ID'],
  UserResponse: IUserResponse,
  Mutation: {},
  Any: Scalars['Any'],
  Date: Scalars['Date'],
  Error: IError,
  GenericResponse: IGenericResponse,
  CacheControlScope: ICacheControlScope,
  Upload: Scalars['Upload'],
};

export type IQueryResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = {
  latest10Q?: Resolver<Maybe<IResolversTypes['Any']>, ParentType, ContextType, RequireFields<IQueryLatest10QArgs, 'ticker'>>,
  schema?: Resolver<IResolversTypes['DBSchema'], ParentType, ContextType>,
  me?: Resolver<IResolversTypes['User'], ParentType, ContextType>,
};

export type IDbDiffChangeResolvers<ContextType = Context, ParentType extends IResolversParentTypes['DBDiffChange'] = IResolversParentTypes['DBDiffChange']> = {
  path?: Resolver<Array<IResolversTypes['Any']>, ParentType, ContextType>,
  actual?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>,
  definition?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IDbDiffResolvers<ContextType = Context, ParentType extends IResolversParentTypes['DBDiff'] = IResolversParentTypes['DBDiff']> = {
  add?: Resolver<Array<Maybe<IResolversTypes['DBDiffChange']>>, ParentType, ContextType>,
  update?: Resolver<Array<Maybe<IResolversTypes['DBDiffChange']>>, ParentType, ContextType>,
  remove?: Resolver<Array<Maybe<IResolversTypes['DBDiffChange']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IDbSchemaResolvers<ContextType = Context, ParentType extends IResolversParentTypes['DBSchema'] = IResolversParentTypes['DBSchema']> = {
  diff?: Resolver<IResolversTypes['DBDiff'], ParentType, ContextType>,
  actual?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IUserResolvers<ContextType = Context, ParentType extends IResolversParentTypes['User'] = IResolversParentTypes['User']> = {
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>,
  createdAt?: Resolver<IResolversTypes['Date'], ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<IResolversTypes['Date']>, ParentType, ContextType>,
  email?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  username?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IUserResponseResolvers<ContextType = Context, ParentType extends IResolversParentTypes['UserResponse'] = IResolversParentTypes['UserResponse']> = {
  ok?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>,
  user?: Resolver<Maybe<IResolversTypes['User']>, ParentType, ContextType>,
  errors?: Resolver<Maybe<Array<IResolversTypes['Error']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IMutationResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = {
  register?: Resolver<IResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<IMutationRegisterArgs, 'username' | 'email' | 'password'>>,
  login?: Resolver<IResolversTypes['GenericResponse'], ParentType, ContextType, RequireFields<IMutationLoginArgs, 'usernameOrEmail' | 'password'>>,
  userUpdate?: Resolver<IResolversTypes['UserResponse'], ParentType, ContextType, RequireFields<IMutationUserUpdateArgs, never>>,
};

export interface IAnyScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['Any'], any> {
  name: 'Any'
}

export interface IDateScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['Date'], any> {
  name: 'Date'
}

export type IErrorResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Error'] = IResolversParentTypes['Error']> = {
  field?: Resolver<IResolversTypes['String'], ParentType, ContextType>,
  message?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type IGenericResponseResolvers<ContextType = Context, ParentType extends IResolversParentTypes['GenericResponse'] = IResolversParentTypes['GenericResponse']> = {
  ok?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>,
  errors?: Resolver<Maybe<Array<IResolversTypes['Error']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export interface IUploadScalarConfig extends GraphQLScalarTypeConfig<IResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type IResolvers<ContextType = Context> = {
  Query?: IQueryResolvers<ContextType>,
  DBDiffChange?: IDbDiffChangeResolvers<ContextType>,
  DBDiff?: IDbDiffResolvers<ContextType>,
  DBSchema?: IDbSchemaResolvers<ContextType>,
  User?: IUserResolvers<ContextType>,
  UserResponse?: IUserResponseResolvers<ContextType>,
  Mutation?: IMutationResolvers<ContextType>,
  Any?: GraphQLScalarType,
  Date?: GraphQLScalarType,
  Error?: IErrorResolvers<ContextType>,
  GenericResponse?: IGenericResponseResolvers<ContextType>,
  Upload?: GraphQLScalarType,
};


