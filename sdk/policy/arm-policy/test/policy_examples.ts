/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  record,
  RecorderEnvironmentSetup,
  Recorder,
  delay,
  isPlaybackMode
} from "@azure-tools/test-recorder";
import * as assert from "assert";
import { ClientSecretCredential } from "@azure/identity";
import { PolicyClient } from "../src/policyClient";
import { string } from "yargs";

const recorderEnvSetup: RecorderEnvironmentSetup = {
  replaceableVariables: {
    AZURE_CLIENT_ID: "azure_client_id",
    AZURE_CLIENT_SECRET: "azure_client_secret",
    AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
    SUBSCRIPTION_ID: "azure_subscription_id"
  },
  customizationsOnRecordings: [
    (recording: any): any =>
      recording.replace(
        /"access_token":"[^"]*"/g,
        `"access_token":"access_token"`
      )
  ],
  queryParametersToSkip: []
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Policy test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: PolicyClient;
  let location: string;
  let resourceGroup: string;
  let groupId: string;
  let policyName: string;
  let scope: string;
  let policyAssignmentName: string;

  beforeEach(async function() {
    recorder = record(this, recorderEnvSetup);
    subscriptionId = env.SUBSCRIPTION_ID;
    // This is an example of how the environment variables are used
    const credential = new ClientSecretCredential(
      env.AZURE_TENANT_ID,
      env.AZURE_CLIENT_ID,
      env.AZURE_CLIENT_SECRET
    );
    client = new PolicyClient(credential, subscriptionId);
    location = "eastus";
    resourceGroup = "myjstest";
    groupId = "20000000-0001-0000-0000-000000000123";
    policyName = "jspolicy";
    scope = "/providers/Microsoft.Management/managementgroups/20000000-0001-0000-0000-000000000123/";
    policyAssignmentName = "passigment";
  });

  afterEach(async function() {
    await recorder.stop();
  });

  it("policyDefinitions create test", async function() {
    const res = await client.policyDefinitions.createOrUpdateAtManagementGroup(policyName,groupId,{
      policyType: "Custom",
    description: "Don't create a VM anywhere",
    policyRule: {
      if: {
        allof: [
          {
            source: "action",
            equals: "Microsoft.Compute/virtualMachines/write",
          },
          {
            field: "location",
            in: ["eastus", "eastus2", "centralus"],
          },
        ],
      },
      then: {
        effect: "deny",
      },
    }
    })
    assert.equal(res.name,policyName);
  });

  it("policyDefinitions get test", async function() {
    const res = await client.policyDefinitions.getAtManagementGroup(policyName,groupId);
    assert.equal(res.name,policyName);
  });

  it("policyDefinitions list test", async function() {
    const resArray = new Array();
    for await (let item of client.policyDefinitions.listByManagementGroup(groupId)){
      resArray.push(item);
    }
    assert.notEqual(resArray.length,0);
  });

  it("policyAssignments create test", async function() {
    const definition = await client.policyDefinitions.getAtManagementGroup(policyName,groupId);
    const res = await client.policyAssignments.create(scope,policyAssignmentName,{
      policyDefinitionId: definition.id
    })
    assert.equal(res.name,policyAssignmentName);
  });

  it("policyAssignments get test", async function() {
    const res = await client.policyAssignments.get(scope,policyAssignmentName);
    assert.equal(res.name,policyAssignmentName);
  });

  it("policyAssignments list test", async function() {
    const resArray = new Array();
    for await (let item of client.policyAssignments.list()){
      resArray.push(item);
    }
    assert.notEqual(resArray.length,0);
  });

  it("policyAssignments delete test", async function() {
    const res = await client.policyAssignments.delete(scope,policyAssignmentName);
    const resArray = new Array();
    for await (let item of client.policyAssignments.list()){
      resArray.push(item);
    }
    assert.notEqual(resArray.length,0);
  });

  it("policyDefinitions delete test", async function() {
    const res = await client.policyDefinitions.deleteAtManagementGroup(policyName,groupId);
    const resArray = new Array();
    for await (let item of client.policyDefinitions.list()){
      resArray.push(item);
    }
    assert.notEqual(resArray.length,0);
  });
});
