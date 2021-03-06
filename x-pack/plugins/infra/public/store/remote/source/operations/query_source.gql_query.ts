/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import gql from 'graphql-tag';

export const sourceQuery = gql`
  query SourceQuery($sourceId: ID = "default") {
    source(id: $sourceId) {
      id
      configuration {
        metricAlias
        logAlias
        fields {
          container
          host
          pod
        }
      }
      status {
        indexFields {
          name
          type
          searchable
          aggregatable
        }
        logIndicesExist
        metricIndicesExist
      }
    }
  }
`;
