/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  english: [
    'en/home',
    {
      type: 'category',
      label: 'Get Started',
      link: {
        type: 'doc',
        id: 'en/quick-start',
      },
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'en/quick-start',
        },
        {
          type: 'category',
          label: 'Tutorials and Datasets',
          link: {
            type: 'doc',
            id: 'en/getting-started/index',
          },
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'en/tutorial'
            },
            {
              type: 'autogenerated',
              dirName: 'en/getting-started/example-datasets',
            },
            {
              type: 'doc',
              id: 'en/getting-started/playground',
            },
          ]
        },
        {
          type: 'doc',
          id: 'en/integrations/index',
        },
        {
          type: 'doc',
          id: 'en/supported-regions',
        },
        {
          type: 'doc',
          id: 'en/install',
        },
      ]
    },
    {
      type: 'category',
      label: 'Connect a Client',
      link: {
        type: 'doc',
        id: 'en/integrations/connect-a-client',
      },
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'en/integrations/clickhouse-client-local',
        },
        {
          type: 'category',
          label: 'SQL Clients',
          link: {
            type: 'generated-index',
            slug: '/en/integrations/sql-clients',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/integrations/sql-clients',
            },
          ],
        },
        {
          type: 'category',
          label: 'Language Clients',
          link: {
            type: 'generated-index',
            slug: '/en/integrations/language-clients',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/integrations/language-clients',
            }
          ],
        },
        {
          type: 'category',
          label: 'Interfaces',
          link: {
            type: 'generated-index',
            slug: 'en/interfaces'
          },
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/interfaces',
            }
          ]
        },

      ]
    },
    {
      type: 'category',
      label: 'Ingest',
      link: {
        type: 'doc',
        id: 'en/integrations/data-ingestion',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'en/integrations/data-ingestion',
        },
      ],
    },
    {
      type: 'category',
      label: 'Visualize',
      link: {
        type: 'doc',
        id: 'en/integrations/data-visualization',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'en/integrations/data-visualization',
        },
      ],
    },
    {
      type: 'category',
      label: 'Migrate',
      link: {
        type: 'doc',
        id: 'en/integrations/migration/index',
      },
      items: [
        {
          type: 'doc',
          label: 'Self-managed ClickHouse to ClickHouse Cloud',
          id: 'en/integrations/migration/clickhouse-to-cloud'
        },
        {
          type: 'category',
          label: 'Other Databases to ClickHouse',
          items: [
            {
              type: 'doc',
              label: 'Using clickhouse-local',
              id: 'en/integrations/migration/clickhouse-local-etl',
            },
            {
              type: 'doc',
              label: 'Using 3rd-party ETL Tool',
              id: 'en/integrations/migration/etl-tool-to-clickhouse',
            },
          ]
        },
        {
          type: 'doc',
          label: 'Cloud Object Storage',
          id: 'en/integrations/migration/object-storage-to-clickhouse'
        },
      ]
    },
    {
      type: 'category',
      label: 'Optimize',
      link: {
        type: 'generated-index',
        slug: '/en/optimize',
      },
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'en/guides/improving-query-performance',
        },
        {
          type: 'doc',
          id: 'en/operations/optimizing-performance/sampling-query-profiler',
        },
        {
          type: 'doc',
          id: 'en/operations/performance-test',
        },
        {
          type: 'doc',
          id: 'en/operations/caches',
        },
        {
          type: 'doc',
          id: 'en/operations/tips',
        },
        {
          type: 'doc',
          id: 'en/operations/opentelemetry',
        },
      ]
    },
    {
      type: 'category',
      label: 'Manage',
      link: {
        type: 'generated-index',
        slug: '/en/manage',
      },
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'en/manage/billing',
        },
        {
          type: 'doc',
          id: 'en/manage/scaling',
        },
        {
          type: 'doc',
          id: 'en/manage/update',
        },
        {
          type: 'doc',
          id: 'en/manage/backups',
        },
        {
          type: 'doc',
          id: 'en/operations/monitoring',
        },
        {
          type: 'doc',
          id: 'en/manage/tuning-for-cloud-cost-efficiency',
        },
        {
          type: 'category',
          label: 'Replication and Sharding',
          link: {
            type: 'generated-index',
            slug: 'en/manage/replication-and-sharding',
          },
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'doc',
              id: 'en/operations/clickhouse-keeper',
            },
            {
              type: 'autogenerated',
              dirName: 'en/guides/sre/keeper',
            },
            {
              type: 'doc',
              id: 'en/operations/ssl-zookeeper',
            },
            {
              type: 'doc',
              id: 'en/guides/sre/scaling-clusters',
            },
          ]
        },
        {
          type: 'category',
          label: 'Users',
          link: {
            type: 'generated-index',
            slug: 'en/manage/users'
          },
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/guides/sre/user-management',
            },
            {
              type: 'doc',
              id: 'en/operations/quotas',
            },
        {
          type: 'category',
          label: 'External Authentication',
          link: {
            type: 'doc',
            id: 'en/operations/external-authenticators/index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/operations/external-authenticators',
            },
          ]
        },
          ]
        },
        {
          type: 'category',
          label: 'Security',
          link: {
            type: 'generated-index',
            slug: '/en/manage/security'
          },
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'doc',
              id: 'en/manage/security/ip-access-list',
            },
            {
              type: 'doc',
              id: 'en/manage/security/aws-privatelink',
            },
            {
              type: 'doc',
              id: 'en/manage/security/activity-log',
            },
            {
              type: 'doc',
              id: 'en/operations/named-collections',
            },
            {
              type: 'doc',
              id: 'en/guides/sre/configuring-ssl',
            },
            {
              type: 'doc',
              id: 'en/guides/sre/network-ports',
            },
          ]
        },
        {
          type: 'doc',
          id: 'en/operations/storing-data',
        },
        {
          type: 'category',
          label: 'Configuration',
          link: {
            type: 'generated-index',
            slug: '/en/manage/configuration',
          },
          items: [
            {
              type: 'doc',
              id: 'en/operations/configuration-files',
            },
            {
              type: 'category',
              label: 'Settings',
              link: {
                type: 'doc',
                id: 'en/operations/settings/index',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'en/operations/settings',
                },
              ]
            },
            {
              type: 'category',
              label: 'System Tables',
              link: {
                type: 'generated-index',
                slug: '/en/operations/system-tables',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'en/operations/system-tables',
                },
              ]
            },
            {
              type: 'category',
              label: 'Server Configuration Parameters',
              link: {
                type: 'doc',
                id: 'en/operations/server-configuration-parameters/index',
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'en/operations/server-configuration-parameters',
                },
              ]
            },
	  ]
	},
        {
          type: 'category',
          label: 'Utilities',
          link: {
            type: 'generated-index',
            slug: 'en/operations/utilities'
          },
          link: {
            type: 'doc',
            id: 'en/operations/utilities/index',
          },
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/operations/utilities',
            }
          ]
        },



      ],
    },
    {
      type: 'category',
      label: 'SQL',
      link: {
        type: 'generated-index',
        slug: '/en/analyze'
      },
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'SQL Reference',
          link: {
            type: 'generated-index',
            slug: '/en/sql-reference',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/sql-reference',
            },
          ],
        },
        {
          type: 'category',
          label: 'Engines',
          link: {
            type: 'generated-index',
            slug: 'en/engines'
          },
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/engines',
            }
          ]
        },
        {
          type: 'category',
          label: 'Guides',
          link: {
            type: 'generated-index',
            slug: 'en/guides'
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/guides/developer',
            },
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Contribute',
      link: {
        type: 'generated-index',
        slug: 'en/development'
      },
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'en/development',
        },
        {
          type: 'category',
          label: 'Native Protocol',
          link: {
            type: 'generated-index',
            slug: 'en/native-protocol'
          },
          collapsed: true,
          collapsible: true,
          items: [
            {
              type: 'autogenerated',
              dirName: 'en/native-protocol',
            }
          ]
        },

      ]
    },
    {
      type: 'category',
      label: 'FAQ',
      link: {
        type: 'generated-index',
        slug: '/en/faq',
      },
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'en/faq',
        }
      ]
    },
    {
      type: 'category',
      label: "What's New",
      link: {
        type: 'generated-index',
        slug: '/en/whats-new',
      },
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'en/whats-new',
        }
      ]
    },
    {
      type: 'category',
      label: 'About Us',
      link: {
        type: 'generated-index',
        slug: '/en/about-us',
      },
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'en/about-us',
        }
      ]
    },
  ],
  russia: [
    {
      type: 'autogenerated',
      dirName: 'ru',
    },
  ],
  chinese: [
    {
      type: 'autogenerated',
      dirName: 'zh',
    },
  ],
};

module.exports = sidebars;
