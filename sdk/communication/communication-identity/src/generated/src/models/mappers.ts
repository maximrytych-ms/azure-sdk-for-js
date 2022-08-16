/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const CommunicationIdentityCreateRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationIdentityCreateRequest",
    modelProperties: {
      createTokenWithScopes: {
        serializedName: "createTokenWithScopes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      expiresInMinutes: {
        serializedName: "expiresInMinutes",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CommunicationIdentityAccessTokenResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationIdentityAccessTokenResult",
    modelProperties: {
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "CommunicationIdentity"
        }
      },
      accessToken: {
        serializedName: "accessToken",
        type: {
          name: "Composite",
          className: "CommunicationIdentityAccessToken"
        }
      }
    }
  }
};

export const CommunicationIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationIdentity",
    modelProperties: {
      id: {
        constraints: {
          MinLength: 1
        },
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommunicationIdentityAccessToken: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationIdentityAccessToken",
    modelProperties: {
      token: {
        constraints: {
          MinLength: 1
        },
        serializedName: "token",
        required: true,
        type: {
          name: "String"
        }
      },
      expiresOn: {
        serializedName: "expiresOn",
        required: true,
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const CommunicationErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};

export const CommunicationError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommunicationError"
            }
          }
        }
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};

export const TeamsUserExchangeTokenRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TeamsUserExchangeTokenRequest",
    modelProperties: {
      token: {
        constraints: {
          MinLength: 1
        },
        serializedName: "token",
        required: true,
        type: {
          name: "String"
        }
      },
      appId: {
        constraints: {
          MinLength: 1
        },
        serializedName: "appId",
        required: true,
        type: {
          name: "String"
        }
      },
      userId: {
        constraints: {
          MinLength: 1
        },
        serializedName: "userId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommunicationIdentityAccessTokenRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationIdentityAccessTokenRequest",
    modelProperties: {
      scopes: {
        serializedName: "scopes",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      expiresInMinutes: {
        serializedName: "expiresInMinutes",
        type: {
          name: "Number"
        }
      }
    }
  }
};
