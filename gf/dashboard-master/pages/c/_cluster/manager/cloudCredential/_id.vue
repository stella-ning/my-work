<script>
import ResourceDetail from '@/components/ResourceDetail';

export default {
  name:       'CloudCredentialEdit',
  components: { ResourceDetail },
};
</script>

<template>
  <ResourceDetail
    store-override="rancher"
    resource-override="cloudcredential"
    parent-route-override="c-cluster-manager-cloudCredential"
  />
</template>
